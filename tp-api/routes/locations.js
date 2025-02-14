import express from "express";
import locationController from "../controllers/locationController.js";

const locationsRoute = express.Router();

locationsRoute
  .get("/", locationController.getLocations)
  .post("/", locationController.postLocation)
  .put("/", locationController.updateLocation)
  .get("/:id", locationController.getLocationById);

export default locationsRoute;
