var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sampleuser",
  password: "pass1234",
  database: "inventory"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE items (id VARCHAR(255), name VARCHAR(255), qty INT(11), amount FLOAT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});