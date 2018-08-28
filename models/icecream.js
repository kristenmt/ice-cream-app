// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var icecream = {
  all: function(cb) {
    orm.all("flavors", function(response) {
      cb(response);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("flavors", cols, vals, function(response) {
      cb(response);
    });
  },
  update: function(id, cv, cb) {
    orm.update("flavors", eaten, cv, id, function(response) {
      cb(response);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = icecream;
