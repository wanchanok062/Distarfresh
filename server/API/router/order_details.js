// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

const generateUniqueID = require("./generate_id");

//flind all order_details
router.get("/order_details", async (req, res) => {
  try {
    const query = `
          SELECT ord.*, p.product_name
          FROM order_detail ord
          INNER JOIN products p ON ord.product_id = p.id
        `;
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//flind one order_detail by order ID
router.get("/order_detail/:id", async (req, res) => {
  try {
    const query = ` SELECT od.*, p.product_name
    FROM order_detail od
    INNER JOIN products p ON od.product_id = p.id
    WHERE od.order_id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST endpoint for creating a new order_detail
router.post("/order_detail", async (req, res) => {
  try {
    // Generate a unique order_detail_id
    const orderDetailId = await generateUniqueID(
      "od-",
      "order_detail_id",
      "order_detail"
    );

    // Extract data from the request body
    const { product_id, order_id, quantity,customer_id } = req.body;

    // Insert the new order_detail into the database
    const query = `
        INSERT INTO order_detail (order_detail_id, product_id, order_id, quantity,customer_id)
        VALUES ($1, $2, $3, $4 , $5)
        RETURNING *
      `;
    const values = [orderDetailId, product_id, order_id, quantity , customer_id];
    const { rows } = await pool.query(query, values);

    // Send the newly created order_detail as a response
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET endpoint for retrieving all order_details by customer_id
router.get("/order_details/:customer_id", async (req, res) => {
    try {
      const { customer_id } = req.params;
  
      const query = `
        SELECT od.*, p.product_name
        FROM order_detail od
        INNER JOIN products p ON od.product_id = p.id
        WHERE od.customer_id = $1
      `;
  
      const { rows } = await pool.query(query, [customer_id]);
      res.json(rows);
    } catch (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  


// DELETE endpoint for deleting an existing order_detail
router.delete("/order_detail/:id", async (req, res) => {
  try {
    // Delete the order_detail from the database
    const query = `DELETE FROM order_detail WHERE order_detail_id = $1`;
    await pool.query(query, [req.params.id]);

    // Send a success response
    res.json({ message: "Order detail deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
