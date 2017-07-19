//Requiring all our node modules
var express         = require("express"),
    app             = express(),
    bodyparser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    hposts          = require("./models/hackingposts.js");
//Connecting to our local database
mongoose.connect("mongodb://localhost/hreference");

//Configuring Body-parser
app.use(bodyparser.urlencoded({extended: true}));
//Configuring Method-override
app.use(methodOverride("_override"));
//Setting our view engine to ejs
app.set("view engine", "ejs");

//index route
app.get("/", function(req,res){
    res.render("index");
});
//Hacking route
app.get("/hacking", function(req,res){
    hposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("hacking", {post: posts});
        }
    });
});
//CREATE PAGE ROUTE
app.get("/hacking/add", function(req,res){
    res.render("add");
});
//CREATE ROUTE
app.post("/hacking", function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    var newPost = {title: title, description: description};
    
    hposts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/hacking");
        }
    });
});
//SHOW ROUTE
app.get("/hacking/:id", function(req,res){
    console.log(req.params.id);
    hposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            console.log(post);
            res.render("show", {post: post});
        }
    });
});

//EDIT PAGE ROUTE
app.get("/hacking/:id/edit", function(req,res){
    hposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.render("edit", {post: post});
        }
    });
});
//UPDATE ROUTE
app.put("/hacking/:id", function(req,res){
    hposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/hacking");
        }
    });
});
//GET DELETE FORM
app.get("/hacking/remove", function(req,res){
    res.render("deleteform");
});
//DELETE ROUTE
app.delete("/hacking/:id", function(req,res){
    hposts.findByIdAndRemove(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/hacking");
        }
    });
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