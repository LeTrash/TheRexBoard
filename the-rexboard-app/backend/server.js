require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

//MiddleWare
app.use(
  cors({
    origin: "http://localhost:8080", //Frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MongoDB connection
console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//Schema & Model
const formSchema = new mongoose.Schema({
  title: String,
  email: String,
  body: String,
  date: String,
  isFree: Boolean,
  priceRange: String,
});

const EventInfo = mongoose.model("eventInfo", formSchema, "eventInfo");

//POST: Submit form data
app.post("/submit", (req, res) => {
  const isFree = req.body.isFree === "0"; // 0 = true

  const newForm = new EventInfo({
    title: req.body.title,
    email: req.body.email,
    body: req.body.body,
    date: req.body.date,
    isFree: isFree,
    priceRange: req.body.priceRange || "", //Only if isFree = False
  });

  newForm
    .save()
    .then(() => res.status(201).send("Data saved to MongoDB!"))
    .catch((err) => res.status(400).send("Error saving data: " + err));
});

// GET: Retrieve all event data
app.get("/api/eventInfo", async (req, res) => {
  try {
    const events = await EventInfo.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events", details: err });
  }
});

//Routes
const eventsRouter = require("./routes/events");
// app.use("/api/eventInfo", eventsRouter);

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
