import axios from "axios";

const courseQueries = {
  courses: async (_, args) => {
    try {
      let courses = await axios.get(
        `http://${process.env.TP_API_HOST}:3007/courses`
      );
      return courses.data;
    } catch (err) {
      throw new Error(`Failed to fetch courses: ${err.message}`);
    }
  },
  course: async (_, { id }) => {
    try {
      let course = await axios.get(
        `http://${process.env.TP_API_HOST}:3007/courses/${id}`
      );
      return course.data;
    } catch (err) {
      throw new Error(`Failed to fetch courses: ${err.message}`);
    }
  },
};

export default courseQueries;
