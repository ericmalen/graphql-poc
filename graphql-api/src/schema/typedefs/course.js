const CourseTypes = /* GraphQL */ `
  # Types
  type Course {
    id: ID!
    name: String!
    location_id: Int!
    par: Int!
    difficulty: String!
    holes: Int!
  }

  # Inputs
  input CourseCreateInput {
    name: String!
    location_id: Int!
    par: Int!
    difficulty: String!
    holes: Int!
  }

  input CourseUpdateInput {
    name: String
    location_id: Int
    par: Int
    difficulty: String
    holes: Int
  }
`;

export default CourseTypes;
