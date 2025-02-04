const RootTypes = /* GraphQL */ `
  type Query {
    # Users
    users: [User]!
    user(id: ID!): User

    # Locations
    locations: [Location]!
    location(id: ID!): Location

    # Courses
    courses: [Course]!
    course(id: ID!): Course
  }

  type Mutation {
    # Users
    createUser(user: UserCreateInput!): User!
    updateUser(id: ID!, user: UserUpdateInput!): User!

    # Locations
    createLocation(location: LocationCreateInput!): Location!
    updateLocation(id: ID!, location: LocationUpdateInput!): Location!

    # Courses
    createCourse(course: CourseCreateInput!): Course!
    updateCourse(id: ID!, course: CourseUpdateInput!): Course!
  }
`;

export default RootTypes;
