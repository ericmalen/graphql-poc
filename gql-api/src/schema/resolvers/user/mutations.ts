import userService from "../../../db/services/userService.js";
import { MutationResolvers } from "../../../types.ts";

const userMutations: MutationResolvers = {
  createUser: async (_, args) => {
    try {
      let res = await userService.postUser(args.user);
      return res[0];
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch courses: ${err.message}`);
      }
    }
  },
  updateUser: async (_, args) => {
    try {
      let res = await userService.updateUser(args);
      return res[0];
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch courses: ${err.message}`);
      }
    }
  },
};

export default userMutations;
