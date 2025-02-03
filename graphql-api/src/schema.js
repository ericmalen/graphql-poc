import sql from "./db/connection.js";
import axios from "axios";

import { createSchema } from "graphql-yoga";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      locations: [Location!]!
      users: [User!]!
    }
    type Location {
      id: ID!
      city: String!
      state: String
      country: String!
    }
    type User {
      id: ID!
      first_name: String!
      last_name: String!
      city: String!
      province: String!
      country: String!
      handicap: Float!
    }
  `,
  resolvers: {
    Query: {
      locations: async () => {
        try {
          let locations = await axios.get(`http://${process.env.TP_API_HOST}:3007/locations`);
          return locations.data;
        } catch (err) {
          throw new Error(`Failed to fetch location: ${err.message}`);
        }
      },
      users: async () => {
        try {
          let users = await sql`SELECT * FROM users`;
          return users;
        } catch (err) {
          throw new Error(`Failed to fetch user: ${err.message}`);
        }
      },
    },
  },
});
