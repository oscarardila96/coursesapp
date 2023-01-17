const { Router } = require("express");
const { getAllUC, getUCById, createUC, updateUC, deleteUC } = require("../controllers/users_courses.controller");


const router = Router();

router.get("/", getAllUC);
router.get("/:id", getUCById);
router.post("/", createUC);
router.put("/:id", updateUC);
router.delete("/:id", deleteUC);

module.exports = router;
