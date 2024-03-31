const { Pool } = require("pg");
require("dotenv").config();

// Create a PostgreSQL pool
const pool = new Pool({
  // user: "distarfresh_db_c0ao_user",
  // // user: "AdMinDiStar",
  // host: process.env.HOST_DB,
  // // database: "distar-db",
  // database: "distarfresh_db_c0ao",
  // password: "RePyt5beZhM70BqeHp1iHyQxlCxdMSQF",
  // // password: "Admin135792468!!",
  // port: process.env.PORT_DB, // PostgreSQL default port

  connectionString: process.env.URL_DB,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
