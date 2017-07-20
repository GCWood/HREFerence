var mongoose = require("mongoose");

var biologyPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("bioposts", biologyPostsSchema);