const connStr = "Server=localhost;Database=sismoura;User Id=sa;Password=epilef;";
const sql = require("mssql"); 

sql.connect(connStr)
   .then(conn => console.log("conectou!"))
   .catch(err => console.log("erro! " + err));

module.exports = sql