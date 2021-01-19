const express = require("express");
const app = express();
const port = 3000;
// Importing routes.
const root = require("./routes/root");

app.use("/", root);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
