const LocationTypes = /* GraphQL */ `
  # Types
  type Location {
    id: ID!
    city: String!
    state: String
    country: String!
  }

  # Inputs
  input LocationCreateInput {
    city: String!
    state: String!
    country: String!
  }

  input LocationUpdateInput {
    city: String
    state: String
    country: String
  }
`;

export default LocationTypes;
