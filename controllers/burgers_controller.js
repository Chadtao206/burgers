var express = require('express');
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", function(req,res){
    burger.create(req.body.name, function(result){
        console.log(result);
    })
})

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log(condition);
    console.log(req.body.devoured);
    burger.update(condition, req.body.devoured, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

module.exports = router;