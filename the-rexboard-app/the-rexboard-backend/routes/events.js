const cors = require("cors");
const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

//GET /api/events
App.use(cors());
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
