// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();
const generateUniqueID = require("./generate_id");

//flind all member_type
router.get("/member_type", async (req, res) => {
  try {
    const query = `SELECT * FROM member_type`;
    const { rows } = await pool.query(query);
    res.json(rows);
    } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
} );
//flind one member_type by id
router.get("/member_type/:id", async (req, res) => {
  try {
    const query = `SELECT * FROM member_type WHERE member_type_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//add new member type
router.post("/member_type", async (req, res) => {
  try {
    const id = await generateUniqueID("mt-", "member_type_id", "member_type");
    const query = `INSERT INTO member_type (member_type_id, member_type_name) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [id, req.body.member_type_name]);
    res.status(201).json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//update member_type by id
router.patch("/member_type/:id", async (req, res) => {
  try {
    const query = `UPDATE member_type SET member_type_name = $1 WHERE member_type_id = $2 RETURNING *`;
    const { rows } = await pool.query(query, [req.body.member_type_name, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//delete member_type by id
router.delete("/member_type/:id", async (req, res) => {
  try {
    const query = `DELETE FROM member_type WHERE member_type_id = $1`;
    await pool.query(query, [req.params.id]);
    res.json({ message: "Member type deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;