var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res)  {
    burger.selectAll(function(data) {
        var hbObject = {
            burgers: data
        };
        console.log(hbObject);
        res.render("index", hbObject);
    });
});

router.post("/burger/create", function(req, res)    {
    burger.insertOne(req.body.burger_name, function()   {
        res.redirect("/index");
    });
});

router.put("/burger/eat/:id", function(req, res)    {
    burger.updateOne(req.params.id, function()  {
        res.redirect("/index");
    });
});

module.exports = router;
