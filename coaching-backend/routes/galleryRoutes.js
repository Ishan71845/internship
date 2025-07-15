import express from "express";
import {
  getGallery,
  createGalleryItem,
  deleteGalleryItem
} from "../controllers/galleryController.js";
import { protect } from "../middleware/protect.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get("/", getGallery);
router.post("/", protect, upload.single("image"), createGalleryItem);
router.delete("/:id", protect, deleteGalleryItem);

export default router;
