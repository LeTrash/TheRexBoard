require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const eventM = require("./routes/eventM");

const app = express();
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
app.use("/api/eventInfo", eventM);

//MongoDB connection
console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
