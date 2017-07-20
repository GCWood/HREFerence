var express = require("express"),
    router     = express.Router(),
    europosts  = require("../models/EuroH.js");

//european-history route
router.get("/", function(req,res){
    console.log(req.session);
    europosts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("european-history/index", {post: posts});
        }
    });
});
//CREATE ROUTE
router.post("/", function(req,res){
    console.log(req.body.title);
    var title = req.body.title;
    var description = req.body.description;
    var newPost = {title: title, description: description};
    
    europosts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/european-history");
        }
    });
});
//SHOW ROUTE
router.get("/:id", function(req,res){
    console.log(req.params.id);
    europosts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            console.log(post);
            res.render("european-history/show", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    europosts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/european-history/" + req.params.id);
        }
    });
});

//DELETE ROUTE
router.delete("/:id", function(req,res){
    europosts.findByIdAndRemove(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.redirect("/european-history");
        }
    });
});

module.exports = router;