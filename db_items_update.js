var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sampleuser",
  password: "pass1234",
  database: "inventory"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE items SET qty = 20 WHERE id = '001'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});