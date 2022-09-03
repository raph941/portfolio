import React from "react";
import styled from "styled-components";
import {
  BlogItemsWrapper,
  SectionDivider,
  StyledH1,
  StyledH2,
} from "../components";
import { BlogItem } from "../components/BlogItem";
import { FeaturedBlogItem } from "../components/FeaturedBlogItem";
import { UserDataType } from "../utils/data";
import { GlobalContext } from "./_app";

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

  const value = React.useContext(GlobalContext)
  console.log({value})

  return (
    <StyledWrapper className="">
      <StyledH1 className="page-title">Blogs</StyledH1>

      <StyledH2 className="page-title">Featured</StyledH2>
      {featured && (
        <div>
          <FeaturedBlogItem {...featured} />
        </div>
      )}
      <StyledH2 className="page-title">Others Blogs</StyledH2>

      <BlogItemsWrapper>
        {otherBlogs?.map((data, index) => (
          <BlogItem key={index} {...data} />
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
