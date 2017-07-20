var express     = require("express"),
    router      = express.Router(),
    pposts      = require("../models/programmingposts.js");
    
//Index route for programming routes

router.get("/", function(req,res){
    pposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("programming/index", {post: posts});
        }
    });
});

//Show route for programming routes
router.get("/:id", function(req,res){
    pposts.findById(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("programming/show", {post: posts});
        }
    });
});
//Create route for programming routes *
router.post("/", function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    var newPost = { title: title, description: description};
    
    pposts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/programming");
        }
    });
});
//Edit route for programming routes
router.put("/:id", function(req,res){
    pposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/programming");
        }
    });
});
//Delete route for porgramming routes
router.delete("/:id", function(req,res){
    pposts.findByIdAndRemove(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/programming");
        }
    })
})

module.exports = router;