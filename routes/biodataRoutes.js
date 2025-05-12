const express = require("express");
const router = express.Router();
const Biodata = require("../model/biodata");

// Ambil semua biodata
router.get("/", async (req, res) => {
  const biodata = await Biodata.find();
  res.json(biodata);
});

module.exports = router;
