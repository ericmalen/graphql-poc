//import sql from "../db/connection.js";

const courses = {
    1: {
        id: 1,
        name: "Pebble Beach Golf Links",
        locationId: 5,
        par: 72,
        difficulty: "Hard",
        holes: 18
    },
    2: {
        id: 2,
        name: "Augusta National Golf Club",
        locationId: 8,
        par: 72,
        difficulty: "Very Hard",
        holes: 18
    },
    3: {
        id: 3,
        name: "St. Andrews Old Course",
        locationId: 10,
        par: 72,
        difficulty: "Medium",
        holes: 18
    }
};

const locations = {
    5: {
        id: 5,
        city: "Pebble Beach",
        state: "California",
        country: "USA"
    },
    8: {
        id: 8,
        city: "Augusta",
        state: "Georgia",
        country: "USA"
    },
    10: {
        id: 10,
        city: "St. Andrews",
        state: "Fife",
        country: "Scotland"
    }
};

const getCourses = () => {
    return courses;
};
  
  const postCourse = (course) => {
    return "id";
  };
  
  const getCourseById = (id) => {
    return courses[id];
  };
  
  const getLocations = () => {
      return locations;
    };
    
    const postLocation = (location) => {
      return "id";
    };
    
    const getLocationById = (id) => {
      return locations[id];
    };

// const getCourses = () => {
//   return sql`SELECT * FROM courses`;
// };

// const postCourse = (user) => {
//   return sql`INSERT INTO courses ${sql(user, "email", "password")} RETURNING id`;
// };

// const getCourseById = (id) => {
//   return sql`SELECT * FROM courses WHERE id = ${id}`;
// };

// const getLocations = () => {
//     return sql`SELECT * FROM locations`;
//   };
  
//   const postLocation = (location) => {
//     return sql`INSERT INTO locations ${sql(location, "email", "password")} RETURNING id`;
//   };
  
//   const getLocationById = (id) => {
//     return sql`SELECT * FROM locations WHERE id = ${id}`;
//   };

export default {
  getCourses,
  getCourseById,
  postCourse,
  getLocationById,
  postLocation,
  getLocations,
};