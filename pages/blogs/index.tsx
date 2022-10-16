import React, { useEffect, useState } from "react";
import styled from "styled-components";
import router from "next/router";
import Skeleton from "react-loading-skeleton";
import {
  BlogItemsWrapper,
  StyledH1,
  StyledH2,
  BlogItem,
  Layout,
} from "../../components";
import { FeaturedBlogItem } from "../../components/FeaturedBlogItem";
import { UserDataType } from "../../data/userData";
import { formatPostsData } from "../../lib/posts";
import { BlogType } from "../../lib/types";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../lib/query";

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
  posts: BlogType[];
}

const Blog: React.FunctionComponent<BlogPageProps> = ({ userData }) => {
  const [posts, setPosts] = useState<BlogType[]>([]);
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: {
      first: 20, // NUmber of posts fetch at a time.
    },
  });

  const handleNavigateToDetail = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  const handleUpdateQuery = (
    previousResult: any,
    { fetchMoreResult }: { fetchMoreResult: any }
  ) => {
    if (!fetchMoreResult) {
      return previousResult;
    }

    return {
      ...fetchMoreResult,
      posts: {
        ...fetchMoreResult?.posts,
        nodes: [
          ...previousResult?.posts?.nodes,
          ...fetchMoreResult?.posts?.nodes,
        ],
      },
    };
  };

  const handleShowMore = () => {
    fetchMore({
      updateQuery: handleUpdateQuery,
      variables: {
        first: 20,
        after: data?.posts?.pageInfo?.endCursor,
      },
    });
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    setPosts(() => [...formatPostsData(data?.posts?.nodes)]);
  }, [data]);

  return (
    <Layout>
      <StyledWrapper>
        <StyledH1 className="page-title">Blogs</StyledH1>

        <section>
          <StyledH2 className="page-title">Featured</StyledH2>
          {loading ? (
            <div className="mb-3">
              <Skeleton count={5} />
            </div>
          ) : (
            !!posts?.length && (
              <div>
                <FeaturedBlogItem
                  onClick={handleNavigateToDetail}
                  {...posts?.[0]}
                />
              </div>
            )
          )}
        </section>

        <section>
          <StyledH2 className="page-title">Others Blogs</StyledH2>

          <BlogItemsWrapper>
            {loading ? (
              <div className="mb-3">
                <Skeleton count={5} />
              </div>
            ) : (
              posts?.map((post, index) => (
                <BlogItem
                  onClick={handleNavigateToDetail}
                  key={index}
                  {...post}
                />
              ))
            )}
          </BlogItemsWrapper>
        </section>

        {data?.posts?.pageInfo.hasNextPage && (
          <div className="show-more-wrap">
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleShowMore()}
            >
              Show more
            </button>
          </div>
        )}
      </StyledWrapper>
    </Layout>
  );
};

export default Blog;
