const UserTypes = /* GraphQL */ `
  # Types
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    city: String!
    state: String!
    country: String!
    handicap: Float!
  }

  # Inputs
  input UserCreateInput {
    first_name: String!
    last_name: String!
    city: String!
    state: String!
    country: String!
    handicap: Float!
  }

  input UserUpdateInput {
    first_name: String
    last_name: String
    city: String
    state: String
    country: String
    handicap: Float
  }
`;

export default UserTypes;
