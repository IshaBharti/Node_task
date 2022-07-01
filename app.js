const express = require("express");
const app = express();
const routes = require("routes");
var bodyParser = require("body-parser");
const db = require("./db/database");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get("/", (req, res) => {
  console.log("heelo");
  res.send("fkldj")
});

app.use("/user", require("./routes/index"));
app.listen(3000, (req, res) => {
  console.log(`working on port 3000`);
});
