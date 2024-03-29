// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();


// Define a route to fetch data from both tables
router.get('/schedules', async (req, res) => {
    try {
      // Query to join order and customer tables
      const query = `
        SELECT o.order_id, o.operation_name, o.cycle_date, o.cycle_order, o.delivery_date,
               c.full_name
        FROM "orders" o
        JOIN customer c ON o.customer_id = c.customer_id
      `;
  
      // Execute the query
      const { rows } = await pool.query(query);
  
      // Send the response with the data
      res.json(rows);
    } catch (error) {
      // If there's an error, send an error response
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Export the router
  module.exports = router;