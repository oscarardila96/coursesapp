const Courses = require("./courses.model");
const CoursesCategories = require("./courses_categories.model");
const Users = require("./users.model");
const UsersCourses = require("./users_courses.model");
const Videos = require("./videos.model");
const Categories = require("./categories.model");

const initModels = () => {
  UsersCourses.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(UsersCourses, { as: "course", foreignKey: "user_id" });
  UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(UsersCourses, { as: "author", foreignKey: "course_id" });

  Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(Videos, { as: "video", foreignKey: "course_id" });

  CoursesCategories.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(CoursesCategories, { as: "category", foreignKey: "course_id" });
  CoursesCategories.belongsTo(Categories, { as: "category", foreignKey: "category_id" });
  Categories.hasMany(CoursesCategories, { as: "course", foreignKey: "category_id" });
};

module.exports = initModels;
