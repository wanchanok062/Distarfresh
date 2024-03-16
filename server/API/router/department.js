// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

//generate department UniqueID
const generateUniqueID = require('./generate_id');

//flind all department
router.get("/department", async (req, res) => {
  try {
    const query = `SELECT * FROM department`;
    const { rows } = await pool.query(query);
    res.json(rows);
    } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
} );
//flind one department by id
router.get('/department/:id', async (req, res) => {
  try {
    const query = `SELECT * FROM department WHERE department_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//add new department
router.post('/department', async (req, res) => {
  try {
    const id = await generateUniqueID('dep-', 'department_id', 'department');
    const query = `INSERT INTO department (department_id, department_name) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [id, req.body.department_name]);
    res.status(201).json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//update existing department
router.patch('/department/:id', async (req, res) => {
  try {
    const query = `UPDATE department SET department_name = $1 WHERE department_id = $2 RETURNING *`;
    const { rows } = await pool.query(query, [req.body.department_name, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//delete a department
router.delete('/department/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDepartment = await pool.query("DELETE FROM department WHERE department_id = $1", [id]);
    res.json("Department was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;