const express = require("express");
const pool = require("../db/db");

const router = express.Router();

//flind all member_status
router.get("/member_status", async (req, res) => {
  try {
    const query = `SELECT * FROM member_status`;
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//flind one member_status by id
router.get("/member_status/:id", async (req, res) => {
  try {
    const query = `SELECT * FROM member_status WHERE member_status_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//generate member_status UniqueID
const generateUniqueID = async () => {
  let id;
  let isUnique = false;
  while (!isUnique) {
    id = "ms-" + Math.floor(Math.random() * 100 + 1).toString().padStart(2, "0");
    const checkQuery = `SELECT member_status_id FROM member_status WHERE member_status_id = $1`;
    const { rows } = await pool.query(checkQuery, [id]);
    if (rows.length === 0) {
      isUnique = true;
    }
  }
  return id;
};
//create member_status  
router.post("/member_status", async (req, res) => {
  try {
    const id = await generateUniqueID();
    const query = `INSERT INTO member_status (member_status_id, member_status_name) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [id, req.body.member_status_name]);
    res.status(201).json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//update member_status by id
router.patch("/member_status/:id", async (req, res) => {
  try {
    const query = `UPDATE member_status SET member_status_name = $1 WHERE member_status_id = $2 RETURNING *`;
    const { rows } = await pool.query(query, [req.body.member_status_name, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//delete member_status by id
router.delete("/member_status/:id", async (req, res) => {
  try {
    const query = `DELETE FROM member_status WHERE member_status_id = $1`;
    await pool.query(query, [req.params.id]);
    res.json({ message: "Member status deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;