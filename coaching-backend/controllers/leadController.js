import { Lead } from "../models/leadModel.js";

// POST create new lead (public)
export const createLead = async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || (!email && !phone)) {
    return res.status(400).json({ message: "Name and at least email or phone required" });
  }

  try {
    const newLead = new Lead({ name, email, phone, message });
    await newLead.save();
    res.status(201).json({ message: "Enquiry submitted", lead: newLead });
  } catch (err) {
    res.status(500).json({ message: "Error submitting enquiry" });
  }
};

// GET all leads (admin only)
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Error fetching leads" });
  }
};

// DELETE lead (admin only)
export const deleteLead = async (req, res) => {
  const { id } = req.params;
  try {
    const lead = await Lead.findByIdAndDelete(id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting lead" });
  }
};
