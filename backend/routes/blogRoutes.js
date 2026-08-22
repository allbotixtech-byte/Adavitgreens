const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");
const { protect } = require("../middleware/auth");
const { getBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController");

// Public
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

// Admin protected
router.post("/", protect, upload.single("thumbnail"), createBlog);
router.put("/:slug", protect, upload.single("thumbnail"), updateBlog);
router.delete("/:slug", protect, deleteBlog);

module.exports = router;
