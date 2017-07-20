var mongoose = require("mongoose");

var ArtPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("artposts", ArtPostsSchema);