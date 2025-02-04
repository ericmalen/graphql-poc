import userService from "../../../db/services/userService.js";

const userQueries = {
  users: async (_, args) => {
    try {
      let users = await userService.getUsers();
      return users;
    } catch (err) {
      throw new Error(`Failed to fetch user: ${err.message}`);
    }
  },
  user: async (_, { id }) => {
    try {
      let res = await userService.getUserById(id);
      return res[0];
    } catch (err) {
      throw new Error(`Failed to fetch user: ${err.message}`);
    }
  },
};

export default userQueries;
