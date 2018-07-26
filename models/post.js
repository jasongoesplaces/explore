const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  user: { type: String, required: true },
  post: String,
  date: { type: Date, default: Date.now },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
