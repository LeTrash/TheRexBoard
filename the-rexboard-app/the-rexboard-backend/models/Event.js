const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  body: String,
  business: String,
  eventDate: Date,
  location: {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  category: [String],
  free: Boolean,
});

module.exports = mongoose.model("Event", EventSchema);
