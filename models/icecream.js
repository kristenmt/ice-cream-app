// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var icecream = {
  all: function(cb) {
    orm.all("flavors", function(response) {
      cb(response);
    });
  },
  // The variables cols and vals are arrays.
  ///////////// new 9/12/18
//  create: function(cols, vals, cb) {
//   orm.create("flavors", cols, vals, function(response) {
//     cb(response);
//   });
// },
    create: function(name, cb) {
    orm.create("flavors",  [
      "cone_name", "eaten"
    ], [
      name, false
    ], cb);
      
  },
  /////////// new 9/12/18
  // update: function(id, cv, cb) {
  //   orm.update("flavors", eaten, cv, id, function(response) {
  //     cb(response);
  //   });
  // }
update: function(id, cb) {
  var condition = "id=" + id;
  orm.update("flavors", {
    eaten: true
  }, condition, cb);
}

};

// Export the database functions for the controller (catsController.js).
module.exports = icecream;
