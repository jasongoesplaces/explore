const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  location: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true }
});

const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;
