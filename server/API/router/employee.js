// Initialize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();
//generate department UniqueID
const generateUniqueID = require("./generate_id");
//generate employee password
const bcrypt = require("bcrypt");
const saltRounds = 20;

// GET route to fetch all employees
router.get("/employees", async (req, res) => {
  try {
    // Query to fetch all employees
    const query = `
    SELECT 
      e.employee_id, 
      e.employee_name, 
      e.username, 
      e.password,
      e.role_id,
      e.department_id,
      r.role_name, 
      d.department_name 
    FROM 
      employee e
    JOIN 
      employee_role r ON e.role_id = r.role_id
    JOIN 
      department d ON e.department_id = d.department_id
  `;

    // Execute the query
    const { rows } = await pool.query(query);

    // Send the response with the fetched data
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// find one employee by id
router.get("/employee/:id", async (req, res) => {
  try {
    // Query to fetch the employee by id
    const query = {
      text: `
      SELECT 
        e.employee_id, 
        e.employee_name, 
        e.username, 
        e.password,
        e.role_id,
        e.department_id,
        r.role_name, 
        d.department_name 
      FROM 
        employee e
      JOIN 
        employee_role r ON e.role_id = r.role_id
      JOIN 
        department d ON e.department_id = d.department_id
      WHERE 
        e.employee_id = $1
    `,
      values: [req.params.id],
    };

    // Execute the query
    const { rows } = await pool.query(query);

    // Decrypt employee_id for the fetched row
    const decryptedRow = {
      ...rows[0],
      username: cryptr.decrypt(rows[0].username),
    };

    // Send the response with the fetched data
    res.status(200).json(decryptedRow);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST route to add a new employee
router.post("/employee", async (req, res) => {
  try {
    // Extract the data from the request body
    const { employee_name, role_id, department_id } = req.body;

    // Generate the employee_id
    const defaultId = await generateUniqueID("em-", "employee_id", "employee");
    const employee_id = defaultId;
    let username = null; // Initialize username as null

    // Check if the role_id is admin
    if (role_id === "admin") {
      // assuming 'admin' is a string representing admin role
      username = `${defaultId}@admin.com`;
    } else {
      username = `${defaultId}@distar.com`;
    }

    // Generate a password for the employee (concatenating employee_id and department_id)
    const password = `${employee_id}-${department_id}`;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Query to add a new employee
    const query = {
      text: `INSERT INTO employee (employee_id, employee_name, username, password, role_id, department_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      values: [
        employee_id,
        employee_name,
        username, // Use employee_id as the username
        hashedPassword,
        role_id,
        department_id,
      ],
    };

    // Execute the query
    const { rows } = await pool.query(query);

    // Send the response with the added employee
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PATCH route to update an employee by id
router.patch("/employee/:id", async (req, res) => {
  try {
    // Destructure the request body
    const { employee_name, role_id, department_id } = req.body;

    // Query to update the employee
    const query = {
      text: `
      UPDATE 
        employee 
      SET 
        employee_name = $1, 
        role_id = $2, 
        department_id = $3
      WHERE 
        employee_id = $4
      RETURNING 
        *
    `,
      values: [employee_name, role_id, department_id, req.params.id],
    };

    // Execute the query
    const { rows } = await pool.query(query);

    // Decrypt employee_id for the updated row

    // Send the response with the updated data
    res.status(200).json({ rows });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE route to delete an employee by id
router.delete("/employee/:id", async (req, res) => {
  try {
    // Query to delete the employee
    const query = {
      text: `DELETE FROM employee WHERE employee_id = $1`,
      values: [req.params.id],
    };

    // Execute the query
    await pool.query(query);

    // Send the response with the message
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
