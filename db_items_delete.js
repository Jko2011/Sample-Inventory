var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sampleuser",
  password: "pass1234",
  database: "inventory"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM items WHERE  id = '001'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});