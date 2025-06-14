const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//MiddleWare
app.use(bodyParser.urlencoded({ extended: true }));

//connect to MongoDB
mongoose.connect(
  '"mongodb+srv://therexboard.qpwvykn.mongodb.net/" --apiVersion 1 --username leeTrash',
  {
    useNewUrlParser: true,
    useUnifiedTopolofy: true,
  }
);

//Define Schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: toString,
});

const FormData = mongoose.model("FormData", formSchema);

//Serve HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

//Handle form submission
app.post("/submit", (req, res) => {
  const newForm = new FormData({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  newForm
    .save()
    .then(() => res.send("Data saved to MongoDB!"))
    .catch((err) => res.status(400).send("Error savingg data: " + err));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
