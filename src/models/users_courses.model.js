const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const UsersCourses = db.define("users_courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
  },
},
  {
    timestamps: false,
  });

module.exports = UsersCourses;
