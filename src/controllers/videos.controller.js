const VideoServices = require("../services/videos.service");

const getAllVideos = async (req, res) => {
  try {
    const result = await VideoServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideoServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createVideo = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await VideoServices.create(newVideo);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await VideoServices.update(id, field)
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideoServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllVideos, getVideoById, createVideo, updateVideo, deleteVideo };