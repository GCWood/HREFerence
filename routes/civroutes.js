var express = require("express"),
    router     = express.Router(),
    civposts  = require("../models/Civics.js");

//civics route
router.get("/", function(req,res){
    console.log(req.session);
    civposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("civics/index", {post: posts});
        }
    });
});

//CREATE ROUTE
router.post("/", function(req,res){
    console.log(req.body.title);
    var title = req.body.title;
    var description = req.body.description;
    var newPost = {title: title, description: description};
    
    civposts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/civics");
        }
    });
});
//SHOW ROUTE
router.get("/:id", function(req,res){
    console.log(req.params.id);
    civposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            console.log(post);
            res.render("civics/show", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    civposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/civics/" + req.params.id);
        }
    });
});

//DELETE ROUTE
router.delete("/:id", function(req,res){
    civposts.findByIdAndRemove(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.redirect("/civics");
        }
    });
});

module.exports = router;