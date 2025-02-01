import express from "express";
import locationController from "../controllers/locationController.js";

const locationsRoute = express.Router();

locationsRoute
  .get("/", locationController.getLocations)
  .post("/", locationController.postLocation)
  .get("/:id", locationController.getLocationById);
  
export default locationsRoute;