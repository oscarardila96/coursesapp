const UsersCourses = require("../models/users_courses.model");

class UserCoursesServices {
  static async getAll() {
    try {
      const result = await UsersCourses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await UsersCourses.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newUserCourse) {
    try {
      const result = await UsersCourses.create(newUserCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = await UsersCourses.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await UsersCourses.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserCoursesServices;