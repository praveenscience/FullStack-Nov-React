const express = require("express");
const app = express.Router();
const animals = require("../constants/animals.json");

app.get("/", (req, res) => {
  res.json("Hello API!");
});
app.get("/animals", (req, res) => {
  res.json(animals);
});
app.post("/animals", (req, res) => {
  res.json("Hey, you posted to animals!");
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
