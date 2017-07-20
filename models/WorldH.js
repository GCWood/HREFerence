var mongoose = require("mongoose");

var worldh = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("worldhposts", worldh);