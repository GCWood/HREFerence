var mongoose = require("mongoose");

var geoPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("geoposts", geoPostsSchema);