import express from "express";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

// Public
router.get("/", getCourses);

// Admin protected
router.post("/", protect, createCourse);
router.put("/:id", protect, updateCourse);
router.delete("/:id", protect, deleteCourse);

export default router;
