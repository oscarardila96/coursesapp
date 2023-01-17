const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/users_courses.model");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        },
        include: {
          model: UsersCourses,
          as: "course",
          attributes: ["courseId"],
          include: {
            model: Courses,
            as: "course",
            attributes: { exclude: ["id", "createdAt", "updatedAt"] }
          }
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UserServices;