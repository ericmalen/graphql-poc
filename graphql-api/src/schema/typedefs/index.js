import RootTypes from "./root.js";
import UserTypes from "./user.js";
import LocationTypes from "./location.js";
import CourseTypes from "./course.js";

const typeDefs = /* GraphQL */ `
  ${RootTypes}
  ${UserTypes}
  ${LocationTypes}
  ${CourseTypes}
`;

export default typeDefs;
