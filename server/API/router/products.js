// Initialize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

// GET route to fetch all products and their associated product categories
router.get("/products", async (req, res) => {
  try {
    // Query to fetch all products and their associated product categories
    const query = `
      SELECT *
      FROM 
        products AS p 
    `;

    // Execute the query
    const { rows } = await pool.query(query);

    // Send the response with the fetched data
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// GET route to fetch onec products and their associated product categories
router.get("/product/:id", async (req, res) => {
  try {
    // Query to fetch all products and their associated product categories
    const query = `
      SELECT *
      FROM 
        products AS p 
      WHERE 
        p.id = $1;
    `;

    // Execute the query
    const { rows } = await pool.query(query, [req.params.id]);

    // Send the response with the fetched data
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST route to add new product
router.post("/product", async (req, res) => {
  try {
    // Extract the data from the request body
    const { product_name, amounts, product_category } = req.body;

    // Query to add new product
    const query = `
      INSERT INTO 
        products (product_name, amounts, product_category) 
      VALUES 
        ($1, $2, $3) 
      RETURNING 
        *;
    `;

    // Execute the query
    const { rows } = await pool.query(query, [
      product_name,
      amounts,
      product_category,
    ]);

    // Send the response with the added data
    res.status(201).json(rows);
  } catch (error) {
    console.error("Error adding new product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// PATCH route to update product by ID
router.patch("/product/:id", async (req, res) => {
  try {
    // Extract the data from the request body
    const { product_name, amounts, product_category } = req.body;

    // Query to update product by ID
    const query = `
      UPDATE 
        products 
      SET 
        product_name = $1, 
        amounts = $2, 
        product_category = $3 
      WHERE 
        id = $4 
      RETURNING 
        *;
    `;

    // Execute the query
    const { rows } = await pool.query(query, [
      product_name,
      amounts,
      product_category,
      req.params.id,
    ]);

    // Send the response with the updated data
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// DELETE route to delete product by ID
router.delete("/product/:id", async (req, res) => {
  try {
    // Query to delete product by ID
    const query = `DELETE FROM products WHERE id = $1`;

    // Execute the query
    await pool.query(query, [req.params.id]);

    // Send the response
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export the router
module.exports = router;
