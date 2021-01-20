const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3100;
// Importing routes.
const root = require("./routes/root");
const api = require("./routes/api");

// Middlewares
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/", root);
app.use("/api", api);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
