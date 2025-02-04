const UserTypes = /* GraphQL */ `
  # Types
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    city: String!
    province: String!
    country: String!
    location_id: Int!
    handicap: Float!
  }

  # Inputs
  input UserCreateInput {
    first_name: String!
    last_name: String!
    city: String!
    province: String!
    country: String!
    location_id: Int!
    handicap: Float!
  }

  input UserUpdateInput {
    first_name: String
    last_name: String
    city: String
    province: String
    country: String
    location_id: Int
    handicap: Float
  }
`;

export default UserTypes;
