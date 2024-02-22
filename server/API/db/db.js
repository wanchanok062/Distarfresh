const { Pool } = require("pg");
require("dotenv").config();



// Create a PostgreSQL pool
const pool = new Pool({
  user: "AdMinDiStar",
  host: "localhost",
  database: "distar-db",
  password: "Admin135792468!!",
  port: process.env.PORT_DB , // PostgreSQL default port
});


module.exports = pool;
