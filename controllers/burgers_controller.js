var express = require("express");

var router = express.Router();
// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var barsObject = {
      burgers: data
    };
    console.log(barsObject);
    res.render("index", barsObject);
  });
});
//still not a valid url
//posts new burger to To be Devoured side with
// specify false so the burger is on the To be devoured side
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
    //   console.log(result);
      res.json({ id: result.insertId });
    }
  );
});

//updates burger by its id 
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
