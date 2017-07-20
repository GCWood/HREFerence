var mongoose = require("mongoose");

var AstronomyPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("astroposts", AstronomyPostsSchema);