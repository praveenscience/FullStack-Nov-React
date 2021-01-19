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
  const { Name, Image } = req.body;
  if (!Name || !Image) {
    res.status(400).json("Whoops, please send both Name and Image parameters.");
  } else {
    const Found = animals.find(a => a.Name.toLowerCase().trim() === Name.toLowerCase().trim() || a.Image.toLowerCase().trim() === Image.toLowerCase().trim());
    if (Found) {
      res.status(409).json("Animal or Image already exists.");
    } else {
      animals.push({ Name, Image });
      res.status(201).json({
        message: "Successfully added animal!",
        Animal: { Name, Image }
      });
    }
  }
});
app.put("/animals/:AnimalID", (req, res) => {
  const AnimalID = +req.params.AnimalID;
  if (!animals[AnimalID]) {
    res.status(404).json("Error, Animal Not Found!");
  } else {
    // Implement what needs to be done.
  }
  res.json("Hey, you put to animals!");
});
app.delete("/animals/:AnimalID", (req, res) => {
  const AnimalID = +req.params.AnimalID;
  if (!animals[AnimalID]) {
    res.status(404).json("Error, Animal Not Found!");
  } else {
    // Implement what needs to be done.
  }
  res.json("Hey, you deleted animals!");
});

module.exports = app;
