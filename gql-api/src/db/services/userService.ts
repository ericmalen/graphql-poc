import sql from "../connection.js";
import { UserCreateInput, User, MutationUpdateUserArgs, UserUpdateInput } from "../../types.js";

// Get
const getUsers = (): Promise<User[]> => {
  return sql<User[]>`SELECT * FROM users`;
};

const getUserById = (id: string): Promise<User[]> => {
  return sql<User[]>`SELECT * FROM users WHERE id = ${id}`;
};

// Post
const postUser = (user: UserCreateInput): Promise<User[]> => {
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
const updateUser = ({id, user}: MutationUpdateUserArgs) => {
  const columns = Object.keys(user).filter((key) => key !== "id") as Array<keyof UserUpdateInput>;
  return sql<User[]>`UPDATE users SET ${sql(user, ...columns)} WHERE id = ${
    id
  } RETURNING id`;
};

export default {
  getUsers,
  getUserById,
  postUser,
  updateUser,
};
