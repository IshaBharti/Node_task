const user = require("../controller/user");
const express = require("express");
const app = express();
app.post("/login", user.add_Data);
app.get("/filterdata", user.filter_data);
module.exports=app
