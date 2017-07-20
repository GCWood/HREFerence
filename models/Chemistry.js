var mongoose = require("mongoose");

var chemPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("chemposts", chemPostsSchema);