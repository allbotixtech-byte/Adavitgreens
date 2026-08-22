const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      token: generateToken(admin._id),
      admin: { id: admin._id, name: admin.name, email: admin.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.json({ admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.seedAdmin = async (req, res) => {
  try {
    const existing = await Admin.findOne({ email: "admin@advaitgreen.com" });
    if (existing) {
      return res.json({ message: "Admin already exists", email: existing.email });
    }

    const admin = await Admin.create({
      name: "Admin",
      email: "admin@advaitgreen.com",
      password: "advait@2026",
    });

    res.status(201).json({
      message: "Admin created successfully",
      email: admin.email,
      note: "Change password after first login",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
