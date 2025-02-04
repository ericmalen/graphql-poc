import userService from "../../../db/services/userService.js";

const userQueries = {
  users: async (_, args) => {
    try {
      let users = userService.getUsers();
      return users;
    } catch (err) {
      throw new Error(`Failed to fetch user: ${err.message}`);
    }
  },
  user: async (_, { id }) => {
    try {
      let user = userService.getUserById(id);
      return user;
    } catch (err) {
      throw new Error(`Failed to fetch user: ${err.message}`);
    }
  },
};

export default userQueries;
