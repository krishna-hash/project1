const mongoose = require("mongoose");
const instance = mongoose.Schema({
  name: String,
 
});
module.exports = mongoose.model("todo", instance);