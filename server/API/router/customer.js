// Import required modules
const express = require("express");
const pool = require("../db/db");

// Create a router
const router = express.Router();

// Define a route to retrieve customer data and associated foreign key values
router.get("/customers", async (req, res) => {
  try {
    const query = `
        SELECT c.customer_id, c.full_name, c.tel, c.address, c.start_date, c.exp_date, ct.customer_type_name, mt.member_type_name, ms.member_status_name, e.employee_name
        FROM customer c
        LEFT JOIN customer_type ct ON c.customer_type_id = ct.customer_type_id
        LEFT JOIN member_type mt ON c.member_type_id = mt.member_type_id
        LEFT JOIN member_status ms ON c.member_status_id = ms.member_status_id
        LEFT JOIN employee e ON c.employee_id = e.employee_id
      `;
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define a route to retrieve customer data by customer_id
router.get("/customer/:id", async (req, res) => {
  try {
    const query = `
        SELECT c.customer_id, 
        c.full_name, 
        c.tel, 
        c.address, 
        c.start_date, 
        c.exp_date,
        c.customer_type_id,
        c.member_type_id,
        c.member_status_id,
        c.paymentstatus_id,
        c.employee_id,
        ct.customer_type_name,
        mt.member_type_name,
        ms.member_status_name,
        e.employee_name,
        ps.paymentstatus_name

        FROM customer c
        LEFT JOIN customer_type ct ON c.customer_type_id = ct.customer_type_id
        LEFT JOIN member_type mt ON c.member_type_id = mt.member_type_id
        LEFT JOIN member_status ms ON c.member_status_id = ms.member_status_id
        LEFT JOIN employee e ON c.employee_id = e.employee_id
        LEFT JOIN payment_status ps ON c.paymentstatus_id = ps.paymentstatus_id
        WHERE c.customer_id = $1
      `;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Define a route to add new customers to the database
router.post("/customer", async (req, res) => {
  try {
    const query = `
        INSERT INTO customer (customer_id,full_name, tel, address, start_date, exp_date, customer_type_id, member_type_id, member_status_id, employee_id,paymentstatus_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10,$11)
        RETURNING *
      `;
    const values = [
      req.body.customer_id,
      req.body.full_name,
      req.body.tel,
      req.body.address,
      req.body.start_date,
      req.body.exp_date,
      req.body.customer_type_id,
      req.body.member_type_id,
      req.body.member_status_id,
      req.body.employee_id,
      req.body.paymentstatus_id,
    ];
    const { rows } = await pool.query(query, values);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Define a route to delete customer data in the database
router.delete("/customer/:id", async (req, res) => {
  try {
    const query = `
        DELETE FROM customer
        WHERE customer_id = $1
      `;
    await pool.query(query, [req.params.id]);
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Define a route to update customer data in the database
router.patch("/customer/:id", async (req, res) => {
  try {
    const query = `
        UPDATE customer
        SET full_name = $1, tel = $2, address = $3, start_date = $4, exp_date = $5, customer_type_id = $6, member_type_id = $7, member_status_id = $8, employee_id = $9,paymentstatus_id = $10
        WHERE customer_id = $11
        RETURNING *
      `;
    const values = [
      req.body.full_name,
      req.body.tel,
      req.body.address,
      req.body.start_date,
      req.body.exp_date,
      req.body.customer_type_id,
      req.body.member_type_id,
      req.body.member_status_id,
      req.body.employee_id,
      req.body.paymentstatus_id,
      req.params.id,
    ];
    const { rows } = await pool.query(query, values);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export the router
module.exports = router;
