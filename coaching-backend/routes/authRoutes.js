console.log("Auth Routes loaded"); // top of file

import express from "express";
import { loginAdmin } from "../controllers/authController.js";

const router = express.Router();
router.post("/login", loginAdmin);

export default router;
