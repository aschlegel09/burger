var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error with connecting: " + err.stack);
        return;
    }
        console.log("Connection successful with id: " + connection.threadId);
});

module.exports = connection;