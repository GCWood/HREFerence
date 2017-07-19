var express = require("express"),
    router     = express.Router(),
    hposts  = require("../models/hackingposts.js");

//Hacking route
router.get("/", function(req,res){
    hposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("hacking", {post: posts});
        }
    });
});
router.get("/delete", function(req,res){
    res.render("deleteform");
});
//CREATE PAGE ROUTE
router.get("/add", function(req,res){
    res.render("add");
});
//CREATE ROUTE
router.post("/", function(req,res){
    console.log(req.body.title);
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
router.get("/:id", function(req,res){
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
router.get("/:id/edit", function(req,res){
    hposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.render("edit", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    hposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/hacking");
        }
    });
});
//DELETE ROUTE
router.delete("/:id", function(req,res){
    hposts.findByIdAndRemove(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/hacking");
        }
    });
});

module.exports = router;