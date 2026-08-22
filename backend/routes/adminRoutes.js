const express = require("express");
const router = express.Router();
const { login, getProfile, seedAdmin } = require("../controllers/adminController");
const { protect } = require("../middleware/auth");

router.post("/login", login);
router.get("/profile", protect, getProfile);
router.post("/seed", seedAdmin);

module.exports = router;
