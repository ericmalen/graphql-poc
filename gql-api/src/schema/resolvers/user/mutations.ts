import userService from "../../../db/services/userService.ts";
import { MutationResolvers } from "../../../types.ts";

const userMutations: MutationResolvers = {
  createUser: async (_, args) => {
    try {
      let res = await userService.postUser(args.user);
      return res[0];
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to create user: ${err.message}`);
      }
      throw new Error('An unknown error occurred while creating the user');
    }
  },
  updateUser: async (_, {id, user}) => {
    try {
      let res = await userService.updateUser({id, user});
      return res[0];
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to update user: ${err.message}`);
      }
      throw new Error('An unknown error occurred while updating the user');
    }
  },
};

export default userMutations;
