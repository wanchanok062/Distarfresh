// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

//generate operation UniqueID
const generateUniqueID = require('./generate_id');

//flind all operation
router.get("/operation", async (req, res) => {
  try {
    const query = `SELECT * FROM operation`;
    const { rows } = await pool.query(query);
    res.json(rows);
    } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
} );
//flind one operation by id
router.get('/operation/:id', async (req, res) => {
  try {
    const query = `SELECT * FROM operation WHERE operation_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//add new operation
router.post('/operation', async (req, res) => {
  try {
    const id = await generateUniqueID('op-', 'operation_id', 'operation');
    const query = `INSERT INTO operation (operation_id, operation_name) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [id, req.body.operation_name]);
    res.status(201).json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//update existing operation
router.patch('/operation/:id', async (req, res) => {
  try {
    const query = `UPDATE operation SET operation_name = $1 WHERE operation_id = $2 RETURNING *`;
    const { rows } = await pool.query(query, [req.body.operation_name, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//delete an operation
router.delete('/operation/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOperation = await pool.query("DELETE FROM operation WHERE operation_id = $1", [id]);
    res.json("Operation was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;