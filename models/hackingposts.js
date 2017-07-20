var mongoose = require("mongoose");

var hackingPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("hpost", hackingPostsSchema);