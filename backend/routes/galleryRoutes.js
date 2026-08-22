const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");
const { protect } = require("../middleware/auth");
const { getGalleryImages, uploadImage, updateImage, deleteImage } = require("../controllers/galleryController");

// Public
router.get("/", getGalleryImages);

// Admin protected
router.post("/", protect, upload.single("image"), uploadImage);
router.put("/:id", protect, updateImage);
router.delete("/:id", protect, deleteImage);

module.exports = router;
