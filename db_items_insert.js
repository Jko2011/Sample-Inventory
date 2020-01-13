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
  var sql = "INSERT INTO items (id, name, qty, amount) VALUES ('001', 'Sampler001', 11, 20.20)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record  inserted");
  });
});
