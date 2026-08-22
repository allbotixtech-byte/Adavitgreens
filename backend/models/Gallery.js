const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String },
    category: {
      type: String,
      enum: ["Facility", "Operations", "Team", "Sustainability"],
      default: "Facility",
    },
    imageUrl: { type: String, required: true },
    cloudinaryId: { type: String },
    description: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", gallerySchema);
