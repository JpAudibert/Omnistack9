const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const PORT = 3333;

const app = express();
mongoose.connect("mongodb://localhost:27017/semana09", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); // PARAUPLOAD

app.use(routes); // TEM QUE VIR DEPOIS DO EXPRESS.JSON

app.listen(PORT);
