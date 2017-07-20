var mongoose = require("mongoose");

var AlgebraPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("algpost", AlgebraPostsSchema);