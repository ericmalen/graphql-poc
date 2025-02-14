import courseService from "../services/courseService.js";

const postCourse = async (req, res) => {
  const courseData = req.body;
  try {
    const response = await courseService.postCourse(courseData);
    res.send(response[0]);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

const updateCourse = async (req, res) => {
  const courseData = req.body;
  try {
    const response = await courseService.updateCourse(courseData);
    res.send(response[0]);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

const getCourses = async (req, res) => {
  try {
    const allCourses = await courseService.getCourses();
    const response = structuredClone(allCourses);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

const getCourseById = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await courseService.getCourseById(id);
    const response = structuredClone(course);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};

export default {
  postCourse,
  getCourses,
  getCourseById,
  updateCourse,
};
