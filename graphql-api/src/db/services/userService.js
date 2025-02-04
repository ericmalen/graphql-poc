import sql from "../connection.js";

const getUsers = () => {
  return sql`SELECT * FROM users`;
};

const getUserById = (id) => {
  return sql`SELECT * FROM users WHERE id = ${id}`;
};

export default {
  getUsers,
  getUserById,
};
