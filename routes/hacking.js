var express = require("express"),
    router     = express.Router(),
    hposts  = require("../models/hackingposts.js");

//Hacking route
router.get("/", function(req,res){
    console.log(req.session);
    hposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("hacking/index", {post: posts});
        }
    });
});
// //DELETE SHit
// router.get("/delete", function(req,res){
//     hposts.find({}, function(err, posts){
//         if(err){
//             console.log(err);
//         }else{
//             res.render("hacking/deletemulti", {post: posts});
//         }
//     });    
// });
// //DELETE FORM
// router.get("/delete", function(req,res){
//     hposts.find({}, function(err, posts){
//         if(err){
//             console.log(err);
//         }else{
//             res.render("deleteform", {post: posts});            
//         }
//     });

// });
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
            res.render("hacking/show", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    hposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/hacking/" + req.params.id);
        }
    });
});

//DELETE ROUTE
router.delete("/:id", function(req,res){
    hposts.findByIdAndRemove(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.redirect("/hacking");
        }
    });
});

module.exports = router;