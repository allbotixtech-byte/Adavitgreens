const Gallery = require("../models/Gallery");
const { cloudinary } = require("../config/cloudinary");

exports.getGalleryImages = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category) filter.category = category;

    const images = await Gallery.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ images });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No image uploaded" });

    const image = await Gallery.create({
      title: req.body.title || "",
      category: req.body.category || "Facility",
      imageUrl: req.file.path,
      cloudinaryId: req.file.filename,
      description: req.body.description || "",
      order: req.body.order || 0,
    });

    res.status(201).json({ image });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const image = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!image) return res.status(404).json({ message: "Image not found" });
    res.json({ image });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    if (image.cloudinaryId) await cloudinary.uploader.destroy(image.cloudinaryId);
    await image.deleteOne();
    res.json({ message: "Image deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
