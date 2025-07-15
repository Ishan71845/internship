import cloudinary from "../utils/cloudinary.js";
import { Gallery } from "../models/galleryModel.js";

export const getGallery = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    res.status(500).json({ message: "Error fetching gallery" });
  }
};

export const createGalleryItem = async (req, res) => {
  try {
    console.log("Received file from Multer:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const stream = cloudinary.uploader.upload_stream(
      { folder: "academy-gallery" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(500).json({ message: "Upload failed" });
        }

        console.log("Cloudinary upload success:", result);

        const newImage = new Gallery({
          title: req.body.title || "Untitled",
          imageUrl: result.secure_url,
          cloudinaryId: result.public_id,
        });
        await newImage.save();

        res.status(201).json({
          message: "Gallery item created",
          data: newImage,
        });
      }
    );

    stream.end(req.file.buffer);
  } catch (err) {
    console.error("Server error during upload:", err);
    res.status(500).json({ message: "Error uploading image" });
  }
};

export const deleteGalleryItem = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Not found" });

    await cloudinary.uploader.destroy(image.cloudinaryId);
    await image.deleteOne();

    res.json({ message: "Image deleted" });
  } catch (err) {
    console.error("Error deleting image:", err);
    res.status(500).json({ message: "Error deleting image" });
  }
};
