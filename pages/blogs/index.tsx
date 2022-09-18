import React from "react";
import styled from "styled-components";
import router from "next/router";
import {
  BlogItemsWrapper,
  StyledH1,
  StyledH2,
  BlogItem
} from "../../components";
import { FeaturedBlogItem } from "../../components/FeaturedBlogItem";
import { UserDataType } from "../../data/userData";

const StyledWrapper = styled.div`
  min-height: calc(100vh - 120px);
  margin-top: 66px;

  .page-title {
    margin-bottom: 50px;
  }

  .show-more-wrap {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;

interface BlogPageProps {
  userData: UserDataType;
}

const Blog: React.FunctionComponent<BlogPageProps> = ({ userData }) => {
  const {
    blogs: { featured, otherBlogs },
  } = userData;

  const handleNavigateToDetail = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <StyledWrapper className="">
      <StyledH1 className="page-title">Blogs</StyledH1>

      <StyledH2 className="page-title">Featured</StyledH2>
      {featured && (
        <div>
          <FeaturedBlogItem onClick={handleNavigateToDetail} {...featured} />
        </div>
      )}
      <StyledH2 className="page-title">Others Blogs</StyledH2>

      <BlogItemsWrapper>
        {otherBlogs?.map((data, index) => (
          <BlogItem onClick={handleNavigateToDetail} key={index} {...data} />
        ))}
      </BlogItemsWrapper>

      <div className="show-more-wrap">
        <button role="button" className="btn btn-outline-secondary">
          Show more
        </button>
      </div>
    </StyledWrapper>
  );
};

export default Blog;
