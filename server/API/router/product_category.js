// Initilize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

//generate payment_status UniqueID
const generateUniqueID = require('./generate_id');

// get all product_category
router.get("/product_category", async (req, res) => {
  try {
    const product_category = await pool.query("SELECT * FROM product_category");
    res.json(product_category.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// Get one product category by ID
router.get("/product_category/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product_category = await pool.query("SELECT * FROM product_category WHERE productcategory_id = $1", [id]);
    res.json(product_category.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// Add new product category
router.post('/product_category', async (req, res) => {
    try {
      const id = await generateUniqueID('pct-', 'product_category_id', 'product_category');
      const query = `INSERT INTO product_category (product_category_id, product_category_name) VALUES ($1, $2) RETURNING *`;
      const { rows } = await pool.query(query, [id, req.body.product_category_name]);
      res.status(201).json(rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Update product category by ID
router.patch('/product_category/:id', async (req, res) => {
    try {
      const query = `UPDATE product_category SET product_category_name = $1 WHERE product_category_id = $2 RETURNING *`;
      const { rows } = await pool.query(query, [req.body.product_category_name, req.params.id]);
      res.json(rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Delete product category by ID
router.delete('/product_category/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProductCategory = await pool.query("DELETE FROM product_category WHERE product_category_id = $1", [id]);
      res.json("Product category was deleted!");
    } catch (err) {
      console.error(err.message);
    }
});

// model.exports
module.exports = router;