var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var icecream = require("../models/icecream.js");

// Create all our routes and set up logic within those routes where required.

//////////// new 9/12/18
// router.get("/", function(req, res) {
//   icecream.all(function(data) {
//     var hbsObject = {
//       flavors: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject
//     );
//   });
// });
router.get("/", function(req, res) {
res.redirect("/flavors");

});
router.get("/flavors", function(req, res) {
  icecream.all(function(icecreamData) {
    res.render("index", {icecream_data: icecreamData });
  });
});





/////////////// new 9/12/18
//router.post("/api/flavors", function(req, res) {
  router.post("/flavors/create", function(req, res) {
  //icecream.create(["flavor", "eaten"], [req.body.flavor, req.body.eaten], function(result) {
  icecream.create(req.body.icecream_name, function (result) {  
  // Send back the ID of the new quote
   // res.json({ id: result.insertId });
   console.log(result);
   res.redirect("/");
   
  });
});



/////////////// new 9/12/18
//router.put("/api/flavors/:id", function(req, res) {
  //var condition = "id = " + req.params.id;
  //console.log("condition", condition);
  //icecream.update(
//     {
//       eaten: req.body.eaten
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });
router.put("/flavors/:id", function(req, res) {
  icecream.update(req.params.id, function(result) {
    console.log(result)
    res.sendStatus(200);
    
  });
});




// Export routes for server.js to use.
module.exports = router;
