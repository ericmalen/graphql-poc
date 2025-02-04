import sql from "../connection.js";

const getMatches = () => {
  return sql`SELECT * FROM matches`;
};

const getMatchById = (id) => {
  return sql`SELECT * FROM matches WHERE id = ${id}`;
};

export default {
  getMatches,
  getMatchById,
};
