const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const pool = require("../db/db");
//import bcrypt
const bcrypt = require("bcrypt");

// Middleware to parse JSON bodies
router.use(express.json());

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Login endpoint
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Query to fetch the user by username
  const query = {
    text: `
        SELECT 
            employee_id, 
            username, 
            password 
        FROM 
            employee 
        WHERE 
            username = $1
        `,
    values: [username],
  };

  pool
    .query(query)
    .then((result) => {
      const user = result.rows[0];
      if (user == null) {
        return res
          .status(400)
          .json({ message: "รหัสผ่านหรือชื่อผู้ใช้ไม่ถูกต้อง" });
      }

      // Compare the password with the hashed password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ message: "Internal Server Error" });
        }

        if (!isMatch) {
          return res.status(400).json({ message: "รหัสผ่านหรือชื่อผู้ใช้ไม่ถูกต้อง" });
        }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken: accessToken });
      });
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

// Protected endpoint example
router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "ok" });
});

module.exports = router;
