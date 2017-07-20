var mongoose = require("mongoose");

var hardWarePostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("hwposts", hardWarePostsSchema);