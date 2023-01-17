const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const CoursesCategories = db.define(
  "courses_categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "course_id",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = CoursesCategories;
