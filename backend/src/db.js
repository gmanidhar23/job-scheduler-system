const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "@Tomandjerry28",
  database: "scheduler"
});

module.exports = { db };
