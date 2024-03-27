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

//flind one order_detail by id
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
    const { product_id, order_id, quantity } = req.body;

    // Insert the new order_detail into the database
    const query = `
        INSERT INTO order_detail (order_detail_id, product_id, order_id, quantity)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `;
    const values = [orderDetailId, product_id, order_id, quantity];
    const { rows } = await pool.query(query, values);

    // Send the newly created order_detail as a response
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PATCH endpoint for updating an existing order_detail
router.patch("/order_detail/:id", async (req, res) => {
  try {
    // Extract data from the request body
    const { product_id, order_id, quantity } = req.body;

    // Update the order_detail in the database
    const query = `
        UPDATE order_detail
        SET product_id = $1, order_id = $2, quantity = $3
        WHERE order_detail_id = $4
        RETURNING *
      `;
    const values = [product_id, order_id, quantity, req.params.id];
    const { rows } = await pool.query(query, values);

    // Send the updated order_detail as a response
    res.json(rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
