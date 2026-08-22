const Blog = require("../models/Blog");
const { cloudinary } = require("../config/cloudinary");

exports.getBlogs = async (req, res) => {
  try {
    const { category, page = 1, limit = 12 } = req.query;
    const filter = { isPublished: true };
    if (category) filter.category = category;

    const blogs = await Blog.find(filter)
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Blog.countDocuments(filter);

    res.json({ blogs, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blogData = { ...req.body };
    if (req.file) {
      blogData.thumbnail = req.file.path;
      blogData.cloudinaryId = req.file.filename;
    }
    const blog = await Blog.create(blogData);
    res.status(201).json({ blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (req.file) {
      if (blog.cloudinaryId) await cloudinary.uploader.destroy(blog.cloudinaryId);
      req.body.thumbnail = req.file.path;
      req.body.cloudinaryId = req.file.filename;
    }

    Object.assign(blog, req.body);
    await blog.save();
    res.json({ blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.cloudinaryId) await cloudinary.uploader.destroy(blog.cloudinaryId);
    await blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
