// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    devour: function(objCol, objData, conditionCol, conditionData, cb) {
      orm.updateOne("burgers", objCol, objData, conditionCol, conditionData, function(res) {
        cb(res);
      });
    }
  };

  // Export the database functions for the controller
  module.exports = burger;
