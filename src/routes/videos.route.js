const { Router } = require("express");
const { getAllVideos, getVideoById, createVideo, updateVideo, deleteVideo } = require("../controllers/videos.controller");

const router = Router();

router.get("/", getAllVideos);
router.get("/:id", getVideoById);
router.post("/", createVideo);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);

module.exports = router;