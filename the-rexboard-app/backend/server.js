require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const path = require("path");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);

//body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MongoDB connection
console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//Schema & Model
const formSchema = new mongoose.Schema({
  title: String,
  email: String,
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

const EventInfo = mongoose.model("eventInfo", formSchema, "eventInfo");

// GET: Retrieve all event data
app.get("/api/eventInfo", async (req, res) => {
  try {
    const events = await EventInfo.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events", details: err });
  }
});

//POST: Submit form data
app.post("/submit", (req, res) => {
  const isFree = req.body.isFree === "0"; // 0 = true

  const newForm = new EventInfo({
    title: req.body.title,
    email: req.body.email,
    body: req.body.body,
    eventdate: req.body.eventdate,
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

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
