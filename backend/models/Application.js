const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    careerPostId: { type: mongoose.Schema.Types.ObjectId, ref: "Career" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    experience: { type: String },
    resumeUrl: { type: String },
    cloudinaryId: { type: String },
    coverLetter: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
