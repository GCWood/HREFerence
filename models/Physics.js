var mongoose = require("mongoose");

var physPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("physposts", physPostsSchema);