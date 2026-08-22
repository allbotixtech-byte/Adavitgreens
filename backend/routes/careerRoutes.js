const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");
const { protect } = require("../middleware/auth");
const { getCareers, getCareerById, createCareer, updateCareer, deleteCareer, submitApplication } = require("../controllers/careerController");
const Application = require("../models/Application");

// Public
router.get("/", getCareers);
router.get("/:id", getCareerById);
router.post("/:id/apply", upload.single("resume"), submitApplication);

// Admin protected
router.post("/", protect, createCareer);
router.put("/:id", protect, updateCareer);
router.delete("/:id", protect, deleteCareer);

// Admin: Get all applications
router.get("/admin/applications", protect, async (req, res) => {
  try {
    const applications = await Application.find().populate("careerPostId", "title").sort({ createdAt: -1 });
    res.json({ applications });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
