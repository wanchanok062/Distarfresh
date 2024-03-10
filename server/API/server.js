// Import required modules
require("dotenv").config();
const app = require("./router/app");
const pool = require("./db/db");

// Use dotenv port
const port = process.env.PORT;
// Log messages indicating successful connection
// pool.on("connect", () => {
//   console.log("Database Done 🎊");
// });

// Log messages indicating errors
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
});

// Start the server and listen for incoming connections
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
