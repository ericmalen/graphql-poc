const locationQueries = {
  locations: async (_, args) => {
    try {
      let locations = await axios.get(
        `http://${process.env.TP_API_HOST}:3007/locations`
      );
      return locations.data;
    } catch (err) {
      throw new Error(`Failed to fetch courses: ${err.message}`);
    }
  },
  location: async (_, { id }) => {
    try {
      let location = await axios.get(
        `http://${process.env.TP_API_HOST}:3007/locations/${id}`
      );
      return location.data;
    } catch (err) {
      throw new Error(`Failed to fetch courses: ${err.message}`);
    }
  },
};

export default locationQueries;
