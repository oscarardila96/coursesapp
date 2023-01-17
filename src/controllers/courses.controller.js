const CourseServices = require("../services/courses.service");

const getAllCourses = async (req, res) => {
  try {
    const result = await CourseServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCourseWithCategoriesAndVideos = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.getWithCategoriesAndVideos(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CourseServices.create(newCourse);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const field = { description };
    const result = await CourseServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllCourses, getCourseById, getCourseWithCategoriesAndVideos, createCourse, updateCourse, deleteCourse };