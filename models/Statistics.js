var mongoose = require("mongoose");

var statsPostsSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
});

module.exports = mongoose.model("statsposts", statsPostsSchema);