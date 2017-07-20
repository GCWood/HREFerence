var express = require("express"),
    router     = express.Router(),
    bioposts  = require("../models/Biology.js");

//biology route
router.get("/", function(req,res){
    console.log(req.session);
    bioposts.find({}, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.render("biology/index", {post: posts});
        }
    });
});
// //DELETE SHit
// router.get("/delete", function(req,res){
//     bioposts.find({}, function(err, posts){
//         if(err){
//             console.log(err);
//         }else{
//             res.render("biology/deletemulti", {post: posts});
//         }
//     });    
// });
// //DELETE FORM
// router.get("/delete", function(req,res){
//     bioposts.find({}, function(err, posts){
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
    
    bioposts.create(newPost, function(err, newPost){
        if(err){
            console.log(err);
        }else{
            res.redirect("/biology");
        }
    });
});
//SHOW ROUTE
router.get("/:id", function(req,res){
    console.log(req.params.id);
    bioposts.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        }else{
            console.log(post);
            res.render("biology/show", {post: post});
        }
    });
});
//UPDATE ROUTE
router.put("/:id", function(req,res){
    bioposts.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/biology/" + req.params.id);
        }
    });
});

//DELETE ROUTE
router.delete("/:id", function(req,res){
    bioposts.findByIdAndRemove(req.params.id, function(err, posts){
        if(err){
            console.log(err);
        }else{
            res.redirect("/biology");
        }
    });
});

module.exports = router;