import RootTypes from "./root.ts";
import UserTypes from "./user.ts";
import LocationTypes from "./location.ts";
import CourseTypes from "./course.ts";

const typeDefs = /* GraphQL */ `
  ${RootTypes}
  ${UserTypes}
  ${LocationTypes}
  ${CourseTypes}
`;

export default typeDefs;
