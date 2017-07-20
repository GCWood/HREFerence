var express = require("express"),
    mongoose= require("mongoose");
    
var programmingSchema = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model("pposts", programmingSchema);

