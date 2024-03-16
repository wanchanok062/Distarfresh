// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();
//import generateUniqueID
const generateUniqueID = require("./generate_id");

//flind all employee_role
router.get("/employee_role", async (req, res) => {
  try {
    const query = `SELECT * FROM employee_role`;
    const { rows } = await pool.query(query);
    res.json(rows);
    } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
} );
//flind one employee_role by id
router.get('/employee_role/:id', async (req, res) => {
  try {
    const query = `SELECT * FROM employee_role WHERE role_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//add new employee_role
router.post('/employee_role', async (req, res) => {
  try {
    const id = await generateUniqueID('er-','role_id','employee_role');
    const query = `INSERT INTO employee_role (role_id, role_name) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [id, req.body.role_name]);
    res.status(201).json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//update employee_role by id
router.patch('/employee_role/:id', async (req, res) => {
  try {
    const query = `UPDATE employee_role SET role_name = $1 WHERE role_id = $2 RETURNING *`;
    const { rows } = await pool.query(query, [req.body.role_name, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//delete employee_role by id
router.delete('/employee_role/:id', async (req, res) => {
  try {
    const query = `DELETE FROM employee_role WHERE role_id = $1`;
    await pool.query(query, [req.params.id]);
    res.json({ message: "Employee Role deleted successfully" });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;