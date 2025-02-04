import { userQueries, userMutations } from "./user/index.js";
import { locationQueries, locationMutations } from "./location/index.js";
import { courseQueries, courseMutations } from "./course/index.js";

const resolvers = {
  Query: {
    ...userQueries,
    ...locationQueries,
    ...courseQueries,
  },
  Mutation: {
    ...userMutations,
    ...locationMutations,
    ...courseMutations,
  },
};

export default resolvers;
