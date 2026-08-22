const ContactSubmission = require("../models/ContactSubmission");
const PickupSubmission = require("../models/PickupSubmission");
const sendEmail = require("../utils/sendEmail");

exports.submitContact = async (req, res) => {
  try {
    const submission = await ContactSubmission.create(req.body);

    try {
      await sendEmail({
        subject: `New Contact Form - ${req.body.name}`,
        html: `<h2>New Contact</h2><p><strong>Name:</strong> ${req.body.name}</p><p><strong>Email:</strong> ${req.body.email}</p><p><strong>Phone:</strong> ${req.body.phone}</p><p><strong>Service:</strong> ${req.body.service || "N/A"}</p><p><strong>Message:</strong> ${req.body.message || "N/A"}</p>`,
      });
    } catch {}

    res.json({ message: "Contact form submitted successfully", submission });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.submitPickup = async (req, res) => {
  try {
    const submission = await PickupSubmission.create(req.body);

    try {
      await sendEmail({
        subject: `New Pickup Request - ${req.body.name} (${req.body.city})`,
        html: `<h2>Pickup Request</h2><p><strong>Name:</strong> ${req.body.name}</p><p><strong>Phone:</strong> ${req.body.phone}</p><p><strong>City:</strong> ${req.body.city}</p><p><strong>Material:</strong> ${req.body.materialType}</p>`,
      });
    } catch {}

    res.json({ message: "Pickup request submitted successfully", submission });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: Get all contact submissions
exports.getContactSubmissions = async (req, res) => {
  try {
    const submissions = await ContactSubmission.find().sort({ createdAt: -1 });
    res.json({ submissions, total: submissions.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: Get all pickup submissions
exports.getPickupSubmissions = async (req, res) => {
  try {
    const submissions = await PickupSubmission.find().sort({ createdAt: -1 });
    res.json({ submissions, total: submissions.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: Mark as read
exports.markContactRead = async (req, res) => {
  try {
    await ContactSubmission.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ message: "Marked as read" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markPickupRead = async (req, res) => {
  try {
    await PickupSubmission.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ message: "Marked as read" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: Delete
exports.deleteContact = async (req, res) => {
  try {
    await ContactSubmission.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePickup = async (req, res) => {
  try {
    await PickupSubmission.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: Dashboard stats
exports.getDashboardStats = async (req, res) => {
  try {
    const Blog = require("../models/Blog");
    const Gallery = require("../models/Gallery");
    const Career = require("../models/Career");
    const Application = require("../models/Application");

    const [blogs, gallery, careers, applications, contacts, pickups, unreadContacts, unreadPickups] = await Promise.all([
      Blog.countDocuments(),
      Gallery.countDocuments(),
      Career.countDocuments({ isActive: true }),
      Application.countDocuments(),
      ContactSubmission.countDocuments(),
      PickupSubmission.countDocuments(),
      ContactSubmission.countDocuments({ isRead: false }),
      PickupSubmission.countDocuments({ isRead: false }),
    ]);

    res.json({
      blogs, gallery, careers, applications, contacts, pickups,
      unreadContacts, unreadPickups,
      totalUnread: unreadContacts + unreadPickups,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
