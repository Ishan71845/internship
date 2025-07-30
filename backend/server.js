// server.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Route Imports
import adminRoutes from "./routes/adminRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//  Parse JSON bodies BEFORE any routes
app.use(express.json());

//  CORS Setup (includes mobile IP for same-network devices)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://192.168.1.5:3000"],
    credentials: true,
  })
);

//  Optional Debug Logger for development
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`, req.body);
  next();
});

//  Route Handlers
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/results", resultRoutes);

//  Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
