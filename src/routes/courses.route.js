const { Router } = require("express");
const { getAllCourses, getCourseById, getCourseWithCategoriesAndVideos, createCourse, updateCourse, deleteCourse } = require("../controllers/courses.controller");

const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.get("/:id/categoriesAndVideos", getCourseWithCategoriesAndVideos)
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;