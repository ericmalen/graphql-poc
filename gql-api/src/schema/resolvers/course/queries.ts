import axios from "axios";
import { QueryResolvers } from "../../../types.ts";

const courseQueries: QueryResolvers = {
  courses: async (_, args) => {
    try {
      let courses = await axios.get(
        `http://${process.env.TP_API_HOST}:3007/courses`
      );
      return courses.data;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch courses: ${err.message}`);
      }
    }
  },
  course: async (_, { id }) => {
    try {
      let course = await axios.get(
        `http://${process.env.TP_API_HOST}:3007/courses/${id}`
      );
      return course.data;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to fetch courses: ${err.message}`);
      }
    }
  },
};

export default courseQueries;
