# Portfolio Project
Scaling Wordpress with the power of NextJs and the static web, to create reusable portfolio and content site.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/raph941/portfolio.git) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/raph941/portfolio.git)

### Requirements
* [WordPress](https://wordpress.org/)
* [WPGraphQL](https://www.wpgraphql.com/)
* Environment variables (see below)

Add a .env file with the following:

```
NEXT_PUBLIC_WORDPRESSQL_SERVER="https://xxxxxxx.com/graphql"
```


## 🚀 Getting Started
The goal of this project, is to create a portfolio and content site, which is easily customisable for any specific use case.
At this moment, the goal is beign achieved by controlling the app data through one static file [Ref Here](https://github.com/raph941/portfolio/blob/1a0739a8d80ff948482f86e9462e3dad3a9f2300/data/userData.ts), which contains a JSON of users'meta data.

The hope is to build more features and provide a user friendly customisation GUI to replace current need to customise the JSON data

This project is SEO friendly and performant with the following support:

- Unique page titles
- Unique descriptions
- Open Graph tags

## Development
To run this project locally or contribute, follow the short steps below.
1. Clone this project locally
2. Install Dependencies

    ```
    yarn install
    ```
3. Run local development server

    ```
    yarn dev
    ```