import axios from "axios";
import { MutationResolvers } from "../../../types.ts";

const courseMutations: MutationResolvers = {
  createCourse: async (_, args) => {
    try {
      let course = await axios.post(
        `http://${process.env.TP_API_HOST}:3007/courses`,
        args.course
      );
      return course.data;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to create course: ${err.message}`);
      }
    }
  },
  updateCourse: async (_, args) => {
    try {
      let course = await axios.put(
        `http://${process.env.TP_API_HOST}:3007/courses`,
        args
      );
      return course.data;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to update course: ${err.message}`);
      }
    }
  },
};

export default courseMutations;
