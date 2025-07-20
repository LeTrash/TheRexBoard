const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Schema & Model
const FormSchema = new mongoose.Schema({
  title: String,

  body: String,
  business: String,
  eventDate: Date, //date type in MongoDB
  isFree: Boolean,
  priceRange: String,
  location: {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  category: [String],
});

const Info = mongoose.model("Info", FormSchema, "eventInfo");

// GET: Retrieve all event data
router.get("/", async (req, res) => {
  try {
    const doc = await Info.find();
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events", details: err });
  }
});

//POST: Submit form data
router.post("/submit", (req, res) => {
  const isFree = req.body.isFree === "true"; // 0 = true

  const newForm = new Info({
    title: req.body.title,
    body: req.body.body,
    eventDate: req.body.eventDate,
    isFree: isFree,
    priceRange: req.body.priceRange || "", //Only if isFree = False
    location: req.body.location,
    category: req.body.category,
  });

  newForm
    .save()
    .then(() => res.status(201).send("Data saved to MongoDB!"))
    .catch((err) => res.status(400).send("Error saving data: " + err));
});

module.exports = router;
