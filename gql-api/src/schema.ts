import { createSchema } from "graphql-yoga";
import typeDefs from "./schema/typedefs/index.ts";
import resolvers from "./schema/resolvers/index.ts";
import { GraphQLSchema } from "graphql";

export const schema: GraphQLSchema = createSchema({
  typeDefs,
  resolvers,
});