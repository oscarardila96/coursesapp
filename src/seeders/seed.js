const db = require("../utils/database");
const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const CoursesCategories = require("../models/courses_categories.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/users_courses.model");
const Videos = require("../models/videos.model");


const users = [
  { firstName: "oscar", lastName: "ardila", password: "root123", email: "oscar@gmail.com" },
  { firstName: "matias", lastName: "barengo", password: "root123", email: "matias@aol.com" },
  { firstName: "laura", lastName: "ruiz", password: "root123", email: "laura@gmail.com" },
  { firstName: "elio", lastName: "maure", password: "root123", email: "elio@outlook.com" }
];

const courses = [
  { title: "Fundamentals", description: "Javascript, HTML and CSS", instructor: "Erik" },
  { title: "React", instructor: "Andres" },
  { title: "Node", description: "Back-End", instructor: "Ian" },
  { title: "Python", description: "Video" }
];

const categories = [
  { name: "theory" },
  { name: "practice" },
  { name: "beginner" },
  { name: "intermediate" },
  { name: "expert" },
  { name: "fundamentals" },
  { name: "react" },
  { name: "node" },
  { name: "python" },
  { name: "others" }
];

const videos = [
  { title: "Redux", url: "/react/redux", courseId: 2 },
  { title: "Express", url: "/node/express", courseId: 3 },
  { title: "Coercion", url: "/fundamentals/coercion", courseId: 1 },
  { title: "Sequelize", url: "/node/sequelize", courseId: 3 },
  { title: "React-Router-DOM", url: "/react/RRD", courseId: 2 },
  { title: "Fundamentals", url: "/python/fundamentals", courseId: 4 }
];

const usersCourses = [
  { userId: 1, courseId: 1 },
  { userId: 1, courseId: 2 },
  { userId: 1, courseId: 3 },
  { userId: 2, courseId: 1 },
  { userId: 2, courseId: 2 },
  { userId: 3, courseId: 2 },
  { userId: 3, courseId: 4 },
  { userId: 4, courseId: 2 },
  { userId: 4, courseId: 3 },
  { userId: 4, courseId: 4 }
];

const coursesCategories = [
  { courseId: 1, categoryId: 1 },
  { courseId: 1, categoryId: 2 },
  { courseId: 1, categoryId: 3 },
  { courseId: 1, categoryId: 6 },
  { courseId: 2, categoryId: 2 },
  { courseId: 2, categoryId: 4 },
  { courseId: 2, categoryId: 7 },
  { courseId: 3, categoryId: 1 },
  { courseId: 3, categoryId: 5 },
  { courseId: 3, categoryId: 8 },
  { courseId: 4, categoryId: 1 },
  { courseId: 4, categoryId: 5 },
  { courseId: 4, categoryId: 9 },
  { courseId: 4, categoryId: 10 },
];


db.sync({ force: true })
  .then(() => {
    console.log("Iniciando seeding")
    users.forEach(user => Users.create(user));
    setTimeout(() => {
      courses.forEach(course => Courses.create(course));
    }, 100);
    setTimeout(() => {
      videos.forEach(video => Videos.create(video));
    }, 200);
    setTimeout(() => {
      categories.forEach(category => Categories.create(category));
    }, 300);
    setTimeout(() => {
      coursesCategories.forEach(cc => CoursesCategories.create(cc));
    }, 400);
    setTimeout(() => {
      usersCourses.forEach(uc => UsersCourses.create(uc));
    }, 500);
  })
  .catch(error => console.log(error));