// // const cors = require("cors");
// const express = require("express");
// const router = express.Router();
// const Event = require("../models/Event");

// //POST route to save event
// router.post("/", async (req, res) => {
//   try {
//     const newEvent = new Event(req.body);
//     await newEvent.save();
//     res.status(201).json({ message: "Event saved successfully!" });
//   } catch (err) {
//     res.status(400).json({ error: "Failed to save event", details: err });
//   }
// });

// //GET Retrieve all event info
// router.get("/", async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch events", message: err });
//   }
// });

// module.exports = router;
