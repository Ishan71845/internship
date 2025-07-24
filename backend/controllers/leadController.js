import Lead from "../models/Lead.js";

// ✅ POST /api/leads — Create a new lead
export const createLead = async (req, res) => {
  try {
    const { name, phone, email, message, course } = req.body;

    const lead = new Lead({ name, phone, email, message, course });
    await lead.save();

    res.status(201).json({ message: "Lead submitted successfully", lead });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit lead" });
  }
};

// ✅ GET /api/leads — Fetch all leads (admin only)
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
};

// ✅ DELETE /api/leads/:id — Delete a lead (admin only)
export const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete lead" });
  }
};
