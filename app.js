//Requiring all our node modules
var express         = require("express"),
    app             = express(),
    bodyparser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override");
    
var algRoutes                   = require("./routes/algroutes"),
    artRoutes                   = require("./routes/artroutes"),
    astRoutes                   = require("./routes/astroutes"),
    bioRoutes                   = require("./routes/bioroutes"),
    calcRoutes                  = require("./routes/calcroutes"),
    chemRoutes                  = require("./routes/chemroutes"),
    civRoutes                   = require("./routes/civroutes"),
    ecoRoutes                   = require("./routes/ecoroutes"),
    eurohisRoutes               = require("./routes/eurohisroutes"),
    geoRoutes                   = require("./routes/georoutes"),
    hardwareRoutes              = require("./routes/hardwareroutes"),
    linalgRoutes                = require("./routes/linalgroutes"),
    physRoutes                  = require("./routes/physicsroutes"),
    programmingRoutes           = require("./routes/programmingroutes"),
    statRoutes                  = require("./routes/statroutes"),
    trigRoutes                  = require("./routes/trigroutes"),
    ushisRoutes                 = require("./routes/ushisroutes"),
    hackingRoutes               = require("./routes/hacking"),
    worldhisRoutes              = require("./routes/worldhisroutes");
    
//Connecting to our local database

var url = process.env.DATABASEURL || "mongodb://localhost/hreference";
mongoose.connect(url);
//Configuring Body-parser
app.use(bodyparser.urlencoded({extended: true}));
//Configuring Method-override
app.use(methodOverride("_override"));
//Setting our view engine to ejs
app.set("view engine", "ejs");
//Static file
app.use(express.static('public'));
// app.use(express.static(__dirname +"public"));

app.use("/hacking", hackingRoutes);
app.use("/european-history", eurohisRoutes);
app.use("/programming", programmingRoutes);
app.use("/physics", physRoutes);
app.use("/chemistry", chemRoutes);
app.use("/biology", bioRoutes);
app.use("/astronomy", astRoutes);
app.use("/algebra", algRoutes);
app.use("/geometry", geoRoutes);
app.use("/linear-algebra", linalgRoutes);
app.use("/trigonometry", trigRoutes);
app.use("/statistics", statRoutes);
app.use("/calculus", calcRoutes);
app.use("/world-history", worldhisRoutes);
app.use("/european-history", eurohisRoutes);
app.use("/us-history", ushisRoutes);
app.use("/civics", civRoutes);
app.use("/economy", ecoRoutes);
app.use("/art", artRoutes);
app.use("/hardware", hardwareRoutes);

//index route
app.get("/", function(req,res){
    res.render("index");
});
//test route
// app.get("/test", function(req,res){
//     res.render("test");
// });
// app.post("/test", function(req,res){
//     console.log(req.body.post);
//     res.render("showtest");
// });



/* { 
post: 
    [ 
    '596e48d3b859fa2acfa4a367', 
    '596e49e7b859fa2acfa4a368' 
    ]
}
*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("HREFerence has started");
})