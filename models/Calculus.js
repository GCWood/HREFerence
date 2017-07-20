var mongoose = require("mongoose");

var calculusPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("calcposts", calculusPostsSchema);