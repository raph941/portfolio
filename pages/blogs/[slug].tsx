import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  StyledH1,
  StyledBodyText,
  ShareContent,
  StyledPageContentWrapper,
} from "../../components";
import { DEFAULT_IMAGE } from "../../components/BlogItem";
import { UserDataType } from "../../data/userData";
import { getAllPosts, getPostBySlug, getRecentPosts } from "../../lib/posts";
import { BlogType } from "../../lib/types";
import { getReadTime } from "../../lib/utils";
import { ThemeType } from "../../styles/theme";

const StyledWrapper = styled.div`
  min-height: calc(100vh - 120px);
  margin-top: 66px;

  .page-title {
    margin-bottom: 50px;
  }
`;

const StyledPageContentWrap = styled.div<{ theme: ThemeType }>`
  display: flex;
  margin-top: 50px;
  max-width: 900px;
  width: -webkit-fill-available;
  margin-left: auto;
  margin-right: auto;

  img {
    max-width: 100% !important;
    // fixes squashed images
    object-fit: contain;
    height: unset;
  }

  p {
    line-height: 30px;
  }

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    margin-left: auto;
    margin-right: auto;
  }
`;

interface BlogPageProps {
  post: BlogType;
  userData: UserDataType;
}

const Blog: React.FunctionComponent<BlogPageProps> = ({ post, userData }) => {
  const [shareUrl, setShareUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  return (
    <StyledWrapper className="d-block">
      <StyledH1 className="text-center">{post?.title}</StyledH1>

      <StyledBodyText className="text-center">
        <div>
          <div className="mb-2">
            {moment(post.date).format("Do MMM, YYYY")}{" "}
            <strong className="mx-2">-</strong> {getReadTime(post?.content)} min
            Read
          </div>
          <ShareContent title={post.title} shareUrl={shareUrl} /> by{" "}
          <strong>{userData?.meta?.fullname}</strong>
        </div>
      </StyledBodyText>

      <div className="flex-next-img-wrap d-flex justify-content-center mb-5">
        <Image
          alt=""
          layout="responsive"
          sizes="100vw"
          height={400}
          width="100vw"
          src={post?.featuredImage?.sourceUrl || DEFAULT_IMAGE}
          quality={100}
          unoptimized
          className="flex-next-img"
        />
      </div>

      <StyledPageContentWrap className="body-text">
        <div
          dangerouslySetInnerHTML={{
            __html: post?.content,
          }}
        />
      </StyledPageContentWrap>
    </StyledWrapper>
  );
};

export default Blog;

interface StaticPropType {
  params: {
    slug: string;
  };
}

export const getStaticProps = async (path: StaticPropType) => {
  const post = await getPostBySlug(path?.params?.slug);

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
