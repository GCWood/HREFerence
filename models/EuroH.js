var mongoose = require("mongoose");

var euroPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("europosts", euroPostsSchema);