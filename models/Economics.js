var mongoose = require("mongoose");

var ecoPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("ecoposts", ecoPostsSchema);