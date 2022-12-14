const express = require("express");
const app = express();

const mongoose = require("mongoose");

const router = express.Router();

const sharks = require("./routes/sharks");
const db = require("./db");

const path = __dirname + "/views/";
const port = 8080;

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use("/sharks", sharks);

app.listen(port, function () {
  console.log("Example app listening on port 8080!");
});
