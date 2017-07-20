var mongoose = require("mongoose");

var ushPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("ushposts", ushPostsSchema);