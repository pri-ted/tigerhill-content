import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, concat } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.tigerhall.net/v2/",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: "abcdefg1234567890",
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
