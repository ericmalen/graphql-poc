import dbService from "./dbService.js";

const postCourse = async (course) => {
  //const dbResponse = await dbService.postCourse(course);
  const dbResponse = dbService.postCourse(course);

  if (!dbResponse) {
    console.log("Failed to insert course into database.\n");

    throw new Error("Course insertion failed.");
  }

  console.log("Course insertion successful!\n");

  return dbResponse;
};

const getCourses = async () => {
  //const courses = await dbService.getCourses();
  const courses = dbService.getCourses();

  if (!courses) {
    console.log("Failed to retrieve courses from table.\n");
    throw new Error("Courses retrieval failed.");
  }

  console.log("Courses retrieval successful!\n");
  
  return courses;
};

const getCourseById = async (id) => {
  //const course = await dbService.getCourseById(id);
  const course = dbService.getCourseById(id);

  if (!course) {
    console.log("Failed to retrieve course from table.\n");
    throw new Error("Course retrieval failed.");
  }

  console.log("Course retrieval successful!\n");
  
  return course;
};

export default { postCourse, getCourses, getCourseById };