import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"]
  },
  passwordHash: {
    type: String,
    required: [true, "Password hash is required"]
  }
});

export const Admin = mongoose.model("Admin", adminSchema);
