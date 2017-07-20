var express = require("express"),
    router     = express.Router(),
    worldposts  = require("../models/WorldH.js");

//world-history route
router.get("/", function(req,res){
    console.log(req.session);
    worldposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("world-history/index", {post: posts});
        }
    });
});
//CREATE ROUTE
router.post("/", function(req,res){
    console.log(req.body.title);
    var title = req.body.title;
    var description = req.body.description;
    var newPost = {title: title, description: description};
    
    worldposts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/world-history");
        }
    });
});
//SHOW ROUTE
router.get("/:id", function(req,res){
    console.log(req.params.id);
    worldposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            console.log(post);
            res.render("world-history/show", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    worldposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/world-history/" + req.params.id);
        }
    });
});

//DELETE ROUTE
router.delete("/:id", function(req,res){
    worldposts.findByIdAndRemove(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.redirect("/world-history");
        }
    });
});

module.exports = router;