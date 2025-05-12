const express = require("express");
const router = express.Router();
const Contact = require("../model/contact");

// Ambil semua data contacts
router.get("/", async (req, res) => {
  const contact = await Contact.find();
  res.json(contact);
});

module.exports = router;
