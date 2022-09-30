import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://blog.raph941.opulentpeerless.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
