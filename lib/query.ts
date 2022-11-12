import { gql } from '@apollo/client'

// See https://master--wpgraphql-docs.netlify.app/getting-started/posts/ for details on WordpressQL.
export const POST_FIELDS = gql`
    fragment PostFields on Post {
        id
        title
        date
        content
        modified
        slug
        tags {
            nodes {
                name
            }
        }
        categories {
            nodes {
                name
            }
        }
        featuredImage {
            node {
                altText
                caption
                sourceUrl
                srcSet
                sizes
                id
            }
        }
    }
`

export const GET_ALL_POSTS = gql`
    ${POST_FIELDS}
    query Posts($first: Int, $after: String) {
        posts(first: $first, after: $after) {
            pageInfo {
                hasNextPage
                endCursor
            }
            nodes {
                ...PostFields
            }
        }
    }
`

export const GET_POST_BY_SLUG = gql`
    ${POST_FIELDS}
    query PostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            ...PostFields
        }
    }
`

export const GET_RECENT_POSTS = gql`
    ${POST_FIELDS}
    query RecentPosts($first: Int) {
        post(first: $first) {
            ...PostFields
        }
    }
`
