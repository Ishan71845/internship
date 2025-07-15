import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"]
  },
  description: String,
  image: String  // Cloudinary URL
}, { timestamps: true });

export const Course = mongoose.model("Course", courseSchema);
