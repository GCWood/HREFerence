var mongoose = require("mongoose");

var civicsPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("civposts", civicsPostsSchema);