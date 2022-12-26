const https = require('https')

const sitemap = require('nextjs-sitemap-generator')
const request = require('request')

const cwd = `${process.cwd()}`

/**
 * Fetches slugs from CMS.
 */
async function fetchSlugs() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: 'https://blog.raph941.opulentpeerless.com/graphql', // Graphql server
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query Posts {
            posts {
              nodes {
                slug
              }
            }
        }`,
        variables: {},
      }),
    }

    request(options, (error, res) => {
      if (error) {
        reject(error)
        return
      }

      const slugsObject = JSON.parse(res.body)?.data?.posts?.nodes
      resolve(slugsObject?.map((data) => data?.slug))
    })
  })
}

// Create sitemap after fetching the posts form CMS
fetchSlugs()
  .then((res) => {
    sitemap({
      baseUrl: 'raph941.com',
      ignoredPaths: ['[slug]'],
      pagesDirectory: cwd + '/pages',
      targetDirectory: 'public/',
      nextConfigPath: cwd + '/next.config.js',
      ignoredExtensions: ['png', 'jpg'],
      pagesConfig: {},
      extraPaths: res,
    })
  })
  .catch((error) => {
    console.log(error)
  })
