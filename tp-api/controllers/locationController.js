import locationService from "../services/locationService.js";

const postLocation = async (req, res) => {
  const locationData = req.body;
  try {
    const response = await locationService.postLocation(locationData);
    res.send(response[0]);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

const updateLocation = async (req, res) => {
  const locationData = req.body;
  try {
    const response = await locationService.updateLocation(locationData);
    res.send(response[0]);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

const getLocations = async (req, res) => {
  try {
    const allLocations = await locationService.getLocations();
    const response = structuredClone(allLocations);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

const getLocationById = async (req, res) => {
  try {
    const id = req.params.id;
    const location = await locationService.getLocationById(id);
    const response = structuredClone(location);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

export default {
  postLocation,
  getLocations,
  getLocationById,
  updateLocation,
};
