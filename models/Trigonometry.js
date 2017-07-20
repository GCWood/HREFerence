var mongoose = require("mongoose");

var trigPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("trigposts", trigPostsSchema);