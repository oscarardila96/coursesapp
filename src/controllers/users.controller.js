const UserServices = require("../services/users.service");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithCourses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;
    const field = { firstName, lastName, password };
    const result = await UserServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllUsers, getUserById, getUserWithCourses, createUser, updateUser, deleteUser };