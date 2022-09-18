import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledH1, StyledBodyText, ShareContent } from "../../components";
import { UserDataType } from "../../data/userData";
import { getReadTime } from "../../lib/utils";

const StyledWrapper = styled.div`
  min-height: calc(100vh - 120px);
  margin-top: 66px;

  .page-title {
    margin-bottom: 50px;
  }

  .content {
    margin-top: 50px;
    max-width: 900px;
    width: -webkit-fill-available;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface BlogPageProps {
  userData: UserDataType;
}

const Blog: React.FunctionComponent<BlogPageProps> = ({ userData }) => {
  const [shareUrl, setShareUrl] = useState<string>("");

  const blogData = userData?.blogs?.otherBlogs[0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  return (
    <StyledWrapper className="d-block">
      <StyledH1 className="text-center">{blogData?.title}</StyledH1>

      <StyledBodyText className="text-center">
        {blogData?.date} <strong className="mx-2">-</strong>{" "}
        {getReadTime(blogData?.content)} min Read
      </StyledBodyText>

      <div className="flex-next-img-wrap d-flex justify-content-center mb-5">
        <Image
          alt=""
          layout="responsive"
          sizes="100vw"
          height={400}
          width="100vw"
          src={blogData?.image}
          quality={100}
          unoptimized
          className="flex-next-img"
        />
      </div>

      <div className="content">
        <ShareContent title={blogData.title} shareUrl={shareUrl} />
        <div
          dangerouslySetInnerHTML={{
            __html: blogData?.content,
          }}
        />
      </div>
    </StyledWrapper>
  );
};

export default Blog;
