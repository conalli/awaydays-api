const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { context } = require("./context");

const server = new ApolloServer({ typeDefs, resolvers, context });

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});
