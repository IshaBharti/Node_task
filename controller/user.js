const User = require("../models/Users");
const add_Data = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const store = await new User(data);
    store.save();
    res.status(200).send({ status: 200, message: "add succesful data" });
  } catch (err) {
    console.log(err);
    res.status(404).send({ status: 404, message: "Err", data: err });
  }
};
const filter_data = async (req, res) => {
  try {
    const data = await User.find({ "longitude": { "$gte": "10km" } });
    res.status(200).send({ status: 200, message: data });
  } catch (err) {
    console.log(err)
    res.status(404).send({ status: 404, message: "Err", data: err });
  }
};
module.exports = { add_Data, filter_data };
