import userService from "../../../db/services/userService.js";
import { QueryResolvers } from "../../../types.ts";

const userQueries: QueryResolvers = {
  users: async (_, args) => {
    try {
      let users = await userService.getUsers();
      return users;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch users: ${err.message}`);
      }
      // check
      throw new Error('An unknown error occurred while fetching the users');
    }
  },
  user: async (_, { id }) => {
    try {
      let res = await userService.getUserById(id);
      return res[0];
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch user: ${err.message}`);
      }
      throw new Error('An unknown error occurred while fetching the user');
    }
  },
};

export default userQueries;
