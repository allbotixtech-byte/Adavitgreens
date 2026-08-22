const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
      type: String,
      enum: ["E-Waste", "Circular Economy", "EPR", "Data Security", "Sustainability", "Recycling Technology", "Responsible Business"],
    },
    thumbnail: { type: String },
    cloudinaryId: { type: String },
    excerpt: { type: String },
    content: { type: String, required: true },
    author: { type: String, default: "Advait Green Team" },
    tags: [{ type: String }],
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

blogSchema.pre("save", function () {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  if (this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

module.exports = mongoose.model("Blog", blogSchema);
