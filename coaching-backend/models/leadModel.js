import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
}, { timestamps: true });

export const Lead = mongoose.model("Lead", leadSchema);
