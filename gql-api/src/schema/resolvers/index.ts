import { userQueries, userMutations } from "./user/index.ts";
import { locationQueries, locationMutations } from "./location/index.ts";
import { courseQueries, courseMutations } from "./course/index.ts";

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
