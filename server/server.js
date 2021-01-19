const express = require("express");
const app = express();
const port = 3000;
// Importing routes.
const root = require("./routes/root");
const api = require("./routes/api");

app.use("/", root);
app.use("/api", api);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
