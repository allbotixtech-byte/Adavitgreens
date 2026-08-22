const Career = require("../models/Career");
const Application = require("../models/Application");
const sendEmail = require("../utils/sendEmail");

exports.getCareers = async (req, res) => {
  try {
    const careers = await Career.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({ careers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) return res.status(404).json({ message: "Position not found" });
    res.json({ career });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCareer = async (req, res) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json({ career });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!career) return res.status(404).json({ message: "Position not found" });
    res.json({ career });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);
    if (!career) return res.status(404).json({ message: "Position not found" });
    res.json({ message: "Position deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.submitApplication = async (req, res) => {
  try {
    const appData = {
      careerPostId: req.params.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      experience: req.body.experience,
      coverLetter: req.body.coverLetter,
    };

    if (req.file) {
      appData.resumeUrl = req.file.path;
      appData.cloudinaryId = req.file.filename;
    }

    const application = await Application.create(appData);

    const career = await Career.findById(req.params.id);

    await sendEmail({
      subject: `New Job Application: ${career?.title || "Position"} - ${req.body.name}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${career?.title || "N/A"}</p>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Experience:</strong> ${req.body.experience || "N/A"}</p>
        ${req.file ? `<p><strong>Resume:</strong> <a href="${req.file.path}">Download</a></p>` : ""}
        ${req.body.coverLetter ? `<p><strong>Cover Letter:</strong> ${req.body.coverLetter}</p>` : ""}
      `,
    });

    res.status(201).json({ message: "Application submitted successfully", application });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
