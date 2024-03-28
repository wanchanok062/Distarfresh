// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

const generateUniqueID = require("./generate_id");

//flind all orders
router.get("/orders", async (req, res) => {
  try {
    const query = `SELECT * FROM orders`;
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//flind one order by id
router.get("/order/:customer_name", async (req, res) => {
  try {
    // ค้นหา customer_id จากตาราง customers โดยใช้ customer_name
    const customerQuery = `SELECT customer_id FROM customer WHERE full_name = $1`;
    const customerResult = await pool.query(customerQuery, [
      req.params.customer_name,
    ]);

    if (customerResult.rows.length === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const customerId = customerResult.rows[0].customer_id;

    res.json({ customer_id: customerId });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// fine all orders by customer_id
router.get("/orders/:id", async (req, res) => {
  try {
    const query = `SELECT * FROM orders WHERE order_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// fine all orders by customer_id
router.get("/orders_customer/:customer_id", async (req, res) => {
  try {
    const query = `SELECT * FROM orders WHERE customer_id = $1`;
    const { rows } = await pool.query(query, [req.params.customer_id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//add new order order_id, customer_id, operation_name ,cycle_date ,cycle_order,delivery_date
router.post("/order", async (req, res) => {
  try {
    const id = await generateUniqueID("order-", "order_id", "orders");
    const query = `INSERT INTO orders (order_id, customer_id, operation_name, cycle_date, cycle_order, delivery_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const { rows } = await pool.query(query, [
      id,
      req.body.customer_id,
      req.body.operation_name,
      req.body.cycle_date,
      req.body.cycle_order,
      req.body.delivery_date,
    ]);
    res.status(201).json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//update order by id
router.patch("/order/:id", async (req, res) => {
  try {
    const query = `UPDATE orders SET  operation_name = $1, cycle_date = $2, cycle_order = $3, delivery_date = $4 WHERE order_id = $5 RETURNING *`;
    const { rows } = await pool.query(query, [
      req.body.operation_name,
      req.body.cycle_date,
      req.body.cycle_order,
      req.body.delivery_date,
      req.params.id,
    ]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete order by id
router.delete("/order/:id", async (req, res) => {
  try {
    const query = `DELETE FROM orders WHERE order_id = $1`;
    await pool.query(query, [req.params.id]);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
