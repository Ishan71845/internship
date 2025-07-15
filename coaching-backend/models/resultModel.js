import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  exam: { type: String, required: true },
  score: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export const Result = mongoose.model("Result", resultSchema);
