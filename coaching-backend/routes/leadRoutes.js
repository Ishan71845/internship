import express from "express";
import {
  createLead,
  getLeads,
  deleteLead
} from "../controllers/leadController.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

router.post("/", createLead); // public
router.get("/", protect, getLeads); // admin only
router.delete("/:id", protect, deleteLead); // admin only

export default router;
