import sql from "../db/connection.js";

const getCourses = () => {
  return sql`SELECT * FROM courses`;
};

const postCourse = (course) => {
  return sql`INSERT INTO courses ${sql(course, "name", "location_id", "par", "difficulty", "holes")} RETURNING id`;
};

const getCourseById = (id) => {
  return sql`SELECT * FROM courses WHERE id = ${id}`;
};

const getLocations = () => {
    return sql`SELECT * FROM locations`;
  };

const postLocation = (location) => {
  return sql`INSERT INTO locations ${sql(location, "city", "state", "country")} RETURNING id`;
};

const getLocationById = (id) => {
  return sql`SELECT * FROM locations WHERE id = ${id}`;
};

export default {
  getCourses,
  getCourseById,
  postCourse,
  getLocationById,
  postLocation,
  getLocations,
};