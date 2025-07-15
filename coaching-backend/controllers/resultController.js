import { Result } from "../models/resultModel.js";

// GET all results - PUBLIC
export const getResults = async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ message: "Error fetching results" });
  }
};

// POST new result - ADMIN only
export const createResult = async (req, res) => {
  const { name, exam, score, image } = req.body;

  if (!name || !exam || !score || !image) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const newResult = new Result({ name, exam, score, image });
    await newResult.save();
    res.status(201).json({
      message: "Result created successfully",
      result: newResult,
    });
  } catch (error) {
    console.error("Error creating result:", error);
    res.status(500).json({ message: "Error creating result" });
  }
};

// PUT update result - ADMIN only
export const updateResult = async (req, res) => {
  const { id } = req.params;
  const { name, exam, score, image } = req.body;

  try {
    const result = await Result.findById(id);
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }

    result.name = name || result.name;
    result.exam = exam || result.exam;
    result.score = score || result.score;
    result.image = image || result.image;

    await result.save();
    res.json({
      message: "Result updated",
      result,
    });
  } catch (error) {
    console.error("Error updating result:", error);
    res.status(500).json({ message: "Error updating result" });
  }
};

// DELETE result - ADMIN only
export const deleteResult = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Result.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.json({ message: "Result deleted successfully" });
  } catch (error) {
    console.error("Error deleting result:", error);
    res.status(500).json({ message: "Error deleting result" });
  }
};
