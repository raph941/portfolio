import apolloClient from "./apollo-client";
import { GET_ALL_POSTS, GET_POST_BY_SLUG, GET_RECENT_POSTS } from "./query";
import { BlogType } from "./types";

export const formatPostData = (post: any) => {
  // Clean objects for easy access to useful properties
  const instance: BlogType = { ...post };

  if (instance.categories) {
    instance.categories = post?.categories?.nodes.map((value: any) => value);
  }

  if (instance.featuredImage) {
    instance.featuredImage = post.featuredImage.node;
  }

  return instance;
};

export const formatPostsData = (posts: any[]) => posts?.map(formatPostData)

export const getAllPosts = async (): Promise<BlogType[]> => {
  const { data, error } = await apolloClient.query({ query: GET_ALL_POSTS });

  const posts = data?.posts?.nodes;

  return posts.map(formatPostData);
};

export const getRecentPosts = async (numberOfPosts = 3) => {
  const posts = await apolloClient.query({ query: GET_RECENT_POSTS, variables: {
    first: numberOfPosts
  } });
  
  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const { data, error } = await apolloClient.query({
    query: GET_POST_BY_SLUG,
    variables: {
      slug: slug,
    },
  });

  const post = data?.post;

  return formatPostData(post);
};
