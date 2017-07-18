var mongoose = require("mongoose");

var hackingPostsSchema = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model("hpost", hackingPostsSchema);