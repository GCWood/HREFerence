var mongoose = require("mongoose");

var linPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("linposts", linPostsSchema);