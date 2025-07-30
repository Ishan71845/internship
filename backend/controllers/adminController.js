// adminController.js
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import Lead from '../models/Lead.js'; 

//  Login Admin
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.json({
      email,
      token: generateToken(email),
    });
  } else {
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
