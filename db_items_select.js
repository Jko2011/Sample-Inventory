var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sampleuser",
  password: "pass1234",
  database: "inventory"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM items WHERE id = '001'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});