import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { environment as env } from "@/environment/environment";

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: `${env.API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  return {
    headers: {
      ...headers,
      authorization: ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs: [],
  resolvers: [],
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export default apolloClient;
