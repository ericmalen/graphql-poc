import sql from "../db/connection.js";

const getCourses = () => {
  return sql`SELECT * FROM courses`;
};

const postCourse = (course) => {
  return sql`INSERT INTO courses ${sql(
    course,
    "name",
    "location_id",
    "par",
    "difficulty",
    "holes"
  )} RETURNING id`;
};

const updateCourse = ({ id, course }) => {
  const columns = Object.keys(course).filter((key) => key !== "id");
  return sql`UPDATE courses SET ${sql(
    course,
    ...columns
  )} WHERE id = ${id} RETURNING id`;
};

const getCourseById = (id) => {
  return sql`SELECT * FROM courses WHERE id = ${id}`;
};

const getLocations = () => {
  return sql`SELECT * FROM locations`;
};

const postLocation = (location) => {
  return sql`INSERT INTO locations ${sql(
    location,
    "city",
    "state",
    "country"
  )} RETURNING id`;
};

const updateLocation = ({ id, location }) => {
  const columns = Object.keys(location).filter((key) => key !== "id");
  return sql`UPDATE locations SET ${sql(
    location,
    ...columns
  )} WHERE id = ${id} RETURNING id`;
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
  updateLocation,
  updateCourse,
};
