const { Pool } = require("pg");

// Create a PostgreSQL pool
const pool = new Pool({
  user: "AdMinDiStar",
  host: "localhost",
  database: "distar-db",
  password: "Admin135792468!!",
  port: 5432, // PostgreSQL default port
});


module.exports = pool;
