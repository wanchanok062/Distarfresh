// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

//generate payment_status UniqueID
const generateUniqueID = require('./generate_id');

//flind all payment_status
router.get("/payment_status", async (req, res) => {
  try {
    const query = `SELECT * FROM payment_status`;
    const { rows } = await pool.query(query);
    res.json(rows);
    } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
} );
//flind one payment_status by id
router.get('/payment_status/:id', async (req, res) => {
  try {
    const query = `SELECT * FROM payment_status WHERE paymentstatus_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//add new payment_status
router.post('/payment_status', async (req, res) => {
  try {
    const id = await generateUniqueID('ps-', 'paymentstatus_id', 'payment_status');
    const query = `INSERT INTO payment_status (paymentstatus_id, paymentstatus_name) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [id, req.body.paymentstatus_name]);
    res.status(201).json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//update payment_status by id
router.patch('/payment_status/:id', async (req, res) => {
  try {
    const query = `UPDATE payment_status SET paymentstatus_name = $1 WHERE paymentstatus_id = $2 RETURNING *`;
    const { rows } = await pool.query(query, [req.body.paymentstatus_name, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//delete payment_status by id
router.delete('/payment_status/:id', async (req, res) => {
  try {
    const query = `DELETE FROM payment_status WHERE paymentstatus_id = $1`;
    await pool.query(query, [req.params.id]);
    res.json({ message: 'Payment status deleted' });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
