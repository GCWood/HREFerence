//Requiring all our node modules
var express         = require("express"),
    app             = express(),
    bodyparser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    hposts          = require("./models/hackingposts.js");
    
var hackingRoutes   = require("./routes/hacking");
//Connecting to our local database
mongoose.connect("mongodb://localhost/hreference");

//Configuring Body-parser
app.use(bodyparser.urlencoded({extended: true}));
//Configuring Method-override
app.use(methodOverride("_override"));
//Setting our view engine to ejs
app.set("view engine", "ejs");

app.use("/hacking", hackingRoutes);
//index route
app.get("/", function(req,res){
    res.render("index");
});

app.get("/programming", function(req,res){
    res.render("programming");
});
//test route
app.get("/test", function(req,res){
    res.render("test");
});
app.post("/test", function(req,res){
    console.log(req.body);
    res.render("showtest");
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("HREFerence has started");
})