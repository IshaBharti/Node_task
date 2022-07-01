var mongoose = require("mongoose");
var { Schema } = mongoose;
var user = {
  name: String,
  latitude: String,
  longitude: String,
};
var User = mongoose.model("User", user);
module.exports = User;
