import Lead from "../models/Lead.js";

// ✅ Create a new lead
export const createLead = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const newLead = new Lead({ name, email, phone });
    await newLead.save();

    res.status(201).json({ success: true, message: "Lead submitted successfully" });
  } catch (error) {
    console.error("Create Lead Error:", error);
    res.status(500).json({ error: "Failed to submit lead" });
  }
};

// ✅ Get all leads
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    console.error("Get Leads Error:", error);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
};

// ✅ Delete a lead by ID
export const deleteLead = async (req, res) => {
  try {
    const leadId = req.params.id;
    await Lead.findByIdAndDelete(leadId);
    res.status(200).json({ success: true, message: "Lead deleted successfully" });
  } catch (error) {
    console.error("Delete Lead Error:", error);
    res.status(500).json({ error: "Failed to delete lead" });
  }
};
