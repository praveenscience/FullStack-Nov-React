const express = require("express");
const app = express.Router();
const animals = require("../constants/animals.json");

app.get("/", (req, res) => {
  res.json("Hello API!");
});
app.get("/animals", (req, res) => {
  res.json(animals);
});

module.exports = app;
