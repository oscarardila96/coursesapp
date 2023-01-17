const { Router } = require("express");
const { getAllUsers, getUserById, getUserWithCourses, createUser, updateUser, deleteUser } = require("../controllers/users.controller");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:id/courses", getUserWithCourses)
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;