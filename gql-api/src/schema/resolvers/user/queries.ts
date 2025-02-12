import userService from "../../../db/services/userService.js";
import { QueryResolvers } from "../../../types.ts";

const userQueries: QueryResolvers = {
  users: async (_, args) => {
    try {
      let users = await userService.getUsers();
      return users;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch courses: ${err.message}`);
      }
    }
  },
  user: async (_, { id }) => {
    try {
      let res = await userService.getUserById(id);
      return res[0];
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch courses: ${err.message}`);
      }
    }
  },
};

export default userQueries;
