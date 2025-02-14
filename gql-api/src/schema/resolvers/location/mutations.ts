import axios from "axios";
import { MutationResolvers } from "../../../types.ts";

const locationMutations: MutationResolvers = {
  createLocation: async (_, args) => {
    try {
      let location = await axios.post(
        `http://${process.env.TP_API_HOST}:3007/locations`,
        args.location
      );
      return location.data;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to create location: ${err.message}`);
      }
    }
  },
  updateLocation: async (_, args) => {
    try {
      let location = await axios.put(
        `http://${process.env.TP_API_HOST}:3007/locations`,
        args
      );
      return location.data;
    } catch (err) {
      if(err instanceof Error){
        throw new Error(`Failed to update location: ${err.message}`);
      }
    }
  },
};

export default locationMutations;
