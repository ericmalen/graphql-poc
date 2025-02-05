import userService from "../../../db/services/userService.js";

const userMutations = {
  createUser: async (_, args) => {
    try {
      let res = await userService.postUser(args.user);
      return res[0];
    } catch (err) {
      throw new Error(`Failed to add user: ${err.message}`);
    }
  },
  updateUser: async (_, args) => {
    try {
      let res = await userService.updateUser(args);
      return res[0];
    } catch (err) {
      throw new Error(`Failed to update user: ${err.message}`);
    }
  },
};

export default userMutations;
