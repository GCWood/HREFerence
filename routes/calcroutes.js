var express = require("express"),
    router     = express.Router(),
    calcposts  = require("../models/Calculus.js");

//calculus route
router.get("/", function(req,res){
    console.log(req.session);
    calcposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("calculus/index", {post: posts});
        }
    });
});

//CREATE ROUTE
router.post("/", function(req,res){
    console.log(req.body.title);
    var title = req.body.title;
    var description = req.body.description;
    var newPost = {title: title, description: description};
    
    calcposts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/calculus");
        }
    });
});
//SHOW ROUTE
router.get("/:id", function(req,res){
    console.log(req.params.id);
    calcposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            console.log(post);
            res.render("calculus/show", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    calcposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/calculus/" + req.params.id);
        }
    });
});

//DELETE ROUTE
router.delete("/:id", function(req,res){
    calcposts.findByIdAndRemove(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.redirect("/calculus");
        }
    });
});

module.exports = router;