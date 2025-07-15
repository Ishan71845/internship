import express from "express";
import {
  getResults,
  createResult,
  updateResult,
  deleteResult
} from "../controllers/resultController.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

router.get("/", getResults);
router.post("/", protect, createResult);
router.put("/:id", protect, updateResult);
router.delete("/:id", protect, deleteResult);

export default router;
