import sql from "../connection.js";

// Get
const getUsers = () => {
  return sql`SELECT * FROM users`;
};

const getUserById = (id) => {
  return sql`SELECT * FROM users WHERE id = ${id}`;
};

// Post
const postUser = (user) => {
  return sql`INSERT INTO users ${sql(
    user,
    "first_name",
    "last_name",
    "city",
    "state",
    "country",
    "handicap"
  )} RETURNING id`;
};

// Put
const updateUser = (args) => {
  const columns = Object.keys(args.user).filter((key) => key !== "id");
  console.log(`\n\n service user str ${JSON.stringify(args.user)} \n\n`);
  console.log(`\n\n service columns str ${JSON.stringify(columns)} \n\n`);
  return sql`UPDATE users SET ${sql(args.user, ...columns)} WHERE id = ${
    args.id
  } RETURNING id`;
};

export default {
  getUsers,
  getUserById,
  postUser,
  updateUser,
};
