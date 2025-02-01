import express from "express";
import locationsRoute from "./locations.js";
import coursesRoute from "./courses.js";

const router = express.Router();

router.use("/locations", locationsRoute).use("/courses", coursesRoute);

export default router;