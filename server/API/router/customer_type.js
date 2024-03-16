const express = require("express");
const pool = require("../db/db");

const router = express.Router();
const generateUniqueID = require("./generate_id");

//flind all customer_type
router.get("/customer_type", async (req, res) => {
  try {
    const query = `SELECT * FROM customer_type`;
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//flind one customer_type by id
router.get("/customer_type/:id", async (req, res) => {
  try {
    const query = `SELECT * FROM customer_type WHERE customer_type_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//create customer_type
router.post("/customer_type", async (req, res) => {
  try {
    const id = await generateUniqueID("ct-", "customer_type_id", "customer_type");
    const query = `INSERT INTO customer_type (customer_type_id, customer_type_name) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [id, req.body.customer_type_name]);
    res.status(201).json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//update customer_type by id
router.patch("/customer_type/:id", async (req, res) => {
  try {
    const query = `UPDATE customer_type SET customer_type_name = $1 WHERE customer_type_id = $2 RETURNING *`;
    const { rows } = await pool.query(query, [req.body.customer_type_name, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}); 
//delete customer_type by id
router.delete("/customer_type/:id", async (req, res) => {
  try {
    const query = `DELETE FROM customer_type WHERE customer_type_id = $1`;
    await pool.query(query, [req.params.id]);
    res.json({ message: "Customer type deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
