const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  email: String,
  body: String,
  business: String,
  eventDate: String,
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

const Event = mongoose.model("Event", EventSchema, "eventInfo");
module.exports = Event;
