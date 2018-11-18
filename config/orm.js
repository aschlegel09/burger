var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, objCol, objData, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";

    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    console.log(queryString);

    connection.query(queryString, [table, objCol, objData], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(table, objCol, objData, conditionCol, conditionData, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    // queryString += " SET ";
    // queryString += objToSql(devoured);
    // queryString += " WHERE ";
    // queryString += condition;

    console.log(queryString);
    connection.query(queryString, [table, objCol, objData, conditionCol, conditionData], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
