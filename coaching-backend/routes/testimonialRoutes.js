import express from "express";
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} from "../controllers/testimonialController.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

// PUBLIC
router.get("/", getTestimonials);

// ADMIN protected
router.post("/", protect, createTestimonial);
router.put("/:id", protect, updateTestimonial);
router.delete("/:id", protect, deleteTestimonial);

export default router;
