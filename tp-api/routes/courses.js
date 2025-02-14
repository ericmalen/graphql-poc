import express from "express";
import courseController from "../controllers/courseController.js";

const coursesRoute = express.Router();

coursesRoute
  .get("/", courseController.getCourses)
  .post("/", courseController.postCourse)
  .put("/", courseController.updateCourse)
  .get("/:id", courseController.getCourseById);

export default coursesRoute;
