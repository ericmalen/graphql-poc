import dbService from "./dbService.js";

const postLocation = async (location) => {
  const dbResponse = await dbService.postLocation(location);

  if (!dbResponse) {
    console.log("Failed to insert location into database.\n");

    throw new Error("Location insertion failed.");
  }

  console.log("Location insertion successful!\n");

  return dbResponse;
};

const updateLocation = async (location) => {
  const dbResponse = await dbService.updateLocation(location);

  if (!dbResponse) {
    console.log("Failed to insert location into database.\n");

    throw new Error("Location insertion failed.");
  }

  console.log("Location insertion successful!\n");

  return dbResponse;
};

const getLocations = async () => {
  const locations = await dbService.getLocations();

  if (!locations) {
    console.log("Failed to retrieve locations from table.\n");
    throw new Error("Locations retrieval failed.");
  }

  console.log("Locations retrieval successful!\n");

  return locations;
};

const getLocationById = async (id) => {
  const location = await dbService.getLocationById(id);

  if (!location) {
    console.log("Failed to retrieve location from table.\n");
    throw new Error("Location retrieval failed.");
  }

  console.log("Location retrieval successful!\n");

  return location;
};

export default { postLocation, getLocations, getLocationById, updateLocation };
