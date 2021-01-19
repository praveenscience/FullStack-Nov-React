const express = require("express");
const app = express.Router();
const animals = require("../constants/animals.json");

app.get("/", (req, res) => {
  res.json("Hello API!");
});
app.get("/animals", (req, res) => {
  res.json(animals);
});
app.get("/animals/:AnimalID", (req, res) => {
  const AnimalID = +req.params.AnimalID;
  if (!animals[AnimalID]) {
    res.status(404).json("Error, Animal Not Found!");
  } else {
    res.json(animals[AnimalID]);
  }
});
app.post("/animals", express.json(), (req, res) => {
  res.json({
    message: "Hey, you posted to animals!",
    body: req.body
  });
});
app.patch("/animals", (req, res) => {
  res.json("Hey, you patched to animals!");
});
app.put("/animals", (req, res) => {
  res.json("Hey, you put to animals!");
});
app.delete("/animals", (req, res) => {
  res.json("Hey, you deleted animals!");
});

module.exports = app;
