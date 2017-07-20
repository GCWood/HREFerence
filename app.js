//Requiring all our node modules
var express         = require("express"),
    app             = express(),
    bodyparser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    hposts          = require("./models/hackingposts.js");
    
var hackingRoutes               = require("./routes/hacking"),
    programmingRoutes           = require("./routes/programmingroutes"),
    hardwareRoutes              = require("./routes/hardwareroutes");
    // physRoutes                  = require("./routes/physicsroutes"),
    // chemRoutes                  = require("./routes/chemroutes"),
    // bioRoutes                   = require("./routes/bioroutes"),
    // astRoutes                   = require("./routes/astroutes"),
    // algRoutes                   = require("./routes/algroutes"),
    // geoRoutes                   = require("./routes/georoutes"),
    // linalgRoutes                = require("./routes/linalgroutes"),
    // trigRoutes                  = require("./routes/trigroutes"),
    // statRoutes                  = require("./routes/statroutes"),
    // calcRoutes                  = require("./routes/calcroutes"),
    // worldhisRoutes              = require("./routes/worldhisroutes"),
    // eurohisRoutes               = require("./routes/eurohsiroutes"),
    // ushisRoutes                 = require("./routes/ushisroutes"),
    // civRoutes                   = require("./routes/civroutes"),
    // ecoRoutes                   = require("./routes/ecoroutes"),
    // artRoutes                   = require("./routes/artroutes");
    
//Connecting to our local database
mongoose.connect("mongodb://localhost/hreference");

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
app.use("/programming", programmingRoutes);
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