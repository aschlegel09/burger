var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'jbvr1wa9977rq29e',
        password: 'xfw5ovaa9p6vdjie',
        database: 'wjtmmawnzhgj3f3w'
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error with connecting: " + err.stack);
        return;
    }
        console.log("Connection successful with id: " + connection.threadId);
});

module.exports = connection;