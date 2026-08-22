const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  submitContact, submitPickup,
  getContactSubmissions, getPickupSubmissions,
  markContactRead, markPickupRead,
  deleteContact, deletePickup,
  getDashboardStats,
} = require("../controllers/formController");

// Public
router.post("/contact", submitContact);
router.post("/schedule-pickup", submitPickup);

// Admin protected
router.get("/admin/contacts", protect, getContactSubmissions);
router.get("/admin/pickups", protect, getPickupSubmissions);
router.put("/admin/contacts/:id/read", protect, markContactRead);
router.put("/admin/pickups/:id/read", protect, markPickupRead);
router.delete("/admin/contacts/:id", protect, deleteContact);
router.delete("/admin/pickups/:id", protect, deletePickup);
router.get("/admin/dashboard", protect, getDashboardStats);

module.exports = router;
