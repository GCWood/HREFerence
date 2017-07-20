var express = require("express"),
    router     = express.Router(),
    linposts  = require("../models/LinearAlgebra.js");

//linear-algebra route
router.get("/", function(req,res){
    console.log(req.session);
    linposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("linear-algebra/index", {post: posts});
        }
    });
});
// //DELETE SHit
// router.get("/delete", function(req,res){
//     linposts.find({}, function(err, posts){
//         if(err){
//             console.log(err);
//         }else{
//             res.render("linear-algebra/deletemulti", {post: posts});
//         }
//     });    
// });
// //DELETE FORM
// router.get("/delete", function(req,res){
//     linposts.find({}, function(err, posts){
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
    
    linposts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/linear-algebra");
        }
    });
});
//SHOW ROUTE
router.get("/:id", function(req,res){
    console.log(req.params.id);
    linposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            console.log(post);
            res.render("linear-algebra/show", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    linposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/linear-algebra/" + req.params.id);
        }
    });
});

//DELETE ROUTE
router.delete("/:id", function(req,res){
    linposts.findByIdAndRemove(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.redirect("/linear-algebra");
        }
    });
});

module.exports = router;