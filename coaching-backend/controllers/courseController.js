import { Course } from "../models/courseModel.js";

// GET all courses - PUBLIC
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
};

// POST new course - ADMIN
export const createCourse = async (req, res) => {
  const { title, description, image } = req.body;

  if (!title || !description || !image) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const newCourse = new Course({ title, description, image });
    await newCourse.save();
    res.status(201).json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    res.status(500).json({ message: "Error creating course" });
  }
};

// PUT update course - ADMIN
export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    course.title = title || course.title;
    course.description = description || course.description;
    course.image = image || course.image;

    const updatedCourse = await course.save();
    res.json({ message: "Course updated successfully", course: updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Error updating course" });
  }
};

// DELETE course - ADMIN
export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting course" });
  }
};
