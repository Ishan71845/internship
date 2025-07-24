import Admin from "../models/admin.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js"; // optional JWT helper
import Lead from "../models/Lead.js"; // add this if you store leads in DB

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(email); // You can also use "admin_id" as a dummy ID

    res.status(200).json({
      email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get All Leads (from MongoDB)
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};