// adminController.js

import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import Lead from '../models/Lead.js';

//  Login Admin
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //  Debugging logs to verify the source of the error
  console.log("Incoming Login Attempt");
  console.log("→ req.body.email:", email);
  console.log("→ req.body.password:", password);
  console.log("→ process.env.ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
  console.log("→ process.env.ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);

  //  Secure comparison using .trim() to avoid whitespace issues
  if (
    email?.trim() === process.env.ADMIN_EMAIL?.trim() &&
    password?.trim() === process.env.ADMIN_PASSWORD?.trim()
  ) {
    console.log(" Admin login successful");
    res.json({
      email,
      token: generateToken(email),
    });
  } else {
    console.log(" Invalid credentials");
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//  Protected Route - Get Leads
const getLeads = asyncHandler(async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

export { loginAdmin, getLeads };
