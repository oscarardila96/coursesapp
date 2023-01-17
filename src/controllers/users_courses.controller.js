const UserCoursesServices = require("../services/users_courses.service");

const getAllUC = async (req, res) => {
  try {
    const result = await UserCoursesServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUCById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserCoursesServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUC = async (req, res) => {
  try {
    const newUserCourse = req.body;
    const result = await UserCoursesServices.create(newUserCourse);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUC = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UserCoursesServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUC = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserCoursesServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllUC, getUCById, createUC, updateUC, deleteUC };