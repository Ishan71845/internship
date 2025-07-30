import Lead from "../models/Lead.js";

//  Create a new lead (with duplicate check)
export const createLead = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;

    //  Check for existing lead by email or phone
    const existingLead = await Lead.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingLead) {
      return res.status(409).json({
        success: false,
        message: "Lead already exists with this email or phone"
      });
    }

    //  Save new lead
    const newLead = new Lead({ name, email, phone, course  });
    await newLead.save();

    res.status(201).json({
      success: true,
      message: "Lead submitted successfully"
    });
  } catch (error) {
    console.error("Create Lead Error:", error);
    res.status(500).json({ error: "Failed to submit lead" });
  }
};

//  Get all leads
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    console.error("Get Leads Error:", error);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
};

//  Delete a lead by ID
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
