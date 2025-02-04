import { createSchema } from "graphql-yoga";
import typeDefs from "./schema/typedefs/index.js";
import resolvers from "./schema/resolvers/index.js";

export const schema = createSchema({
  typeDefs,
  resolvers,
});
