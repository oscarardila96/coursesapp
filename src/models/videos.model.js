const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Videos = db.define("videos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
  },
});

module.exports = Videos;
