import { Testimonial } from "../models/testimonialModel.js";

// GET all testimonials - PUBLIC
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    res.status(500).json({ message: "Error fetching testimonials" });
  }
};

// POST create new testimonial - ADMIN
export const createTestimonial = async (req, res) => {
  console.log("✅ Received body:", req.body);

  const { name, content } = req.body;

  if (!name || !content) {
    console.log("❌ Missing fields. name:", name, "content:", content);
    return res.status(400).json({ message: "Name and content are required" });
  }

  try {
    const newTestimonial = new Testimonial({ name, content });
    await newTestimonial.save();
    res.status(201).json({
      message: "Testimonial created successfully",
      testimonial: newTestimonial
    });
  } catch (err) {
    console.error("Error creating testimonial:", err);
    res.status(500).json({ message: "Error creating testimonial" });
  }
};

// PUT update testimonial - ADMIN
export const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;

  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    testimonial.name = name || testimonial.name;
    testimonial.content = content || testimonial.content;

    await testimonial.save();
    res.json({ message: "Testimonial updated", testimonial });
  } catch (err) {
    console.error("Error updating testimonial:", err);
    res.status(500).json({ message: "Error updating testimonial" });
  }
};

// DELETE testimonial - ADMIN
export const deleteTestimonial = async (req, res) => {
  const { id } = req.params;

  try {
    const testimonial = await Testimonial.findByIdAndDelete(id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Testimonial deleted successfully" });
  } catch (err) {
    console.error("Error deleting testimonial:", err);
    res.status(500).json({ message: "Error deleting testimonial" });
  }
};
