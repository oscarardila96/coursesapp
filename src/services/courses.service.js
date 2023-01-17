const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const CoursesCategories = require("../models/courses_categories.model");
const Videos = require("../models/videos.model");

class CourseServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Courses.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCategoriesAndVideos(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [{
          model: CoursesCategories,
          as: "category",
          attributes: ["category_id"],
          include: {
            model: Categories,
            as: "category",
            attributes: ["name"]
          }
        }, {
          model: Videos,
          as: "video",
          attributes: ["title", "url"]
        }]
      });
      return result
    } catch (error) {
      throw error;
    }
  }
  static async create(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = await Courses.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Courses.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CourseServices;