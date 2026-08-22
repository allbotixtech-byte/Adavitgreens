const mongoose = require("mongoose");

const pickupSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    organization: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    pincode: { type: String },
    preferredDate: { type: String },
    preferredTime: { type: String },
    materialType: { type: String },
    quantity: { type: String },
    devices: { type: String },
    category: { type: String },
    remarks: { type: String },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PickupSubmission", pickupSubmissionSchema);
