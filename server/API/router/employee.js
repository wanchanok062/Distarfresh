// Initialize express router
const express = require("express");
// Import the pool object from the db module
const pool = require("../db/db");
// Create a router
const router = express.Router();

//generateEmployeeId
async function generateEmployeeId(roleId, departmentId) {
    try {
        // Generate a random four-digit number
        const randomNumber = Math.floor(1000 + Math.random() * 9000);

        // Create the employee_id using role_id, department_id, and random number
        const employeeId = `em-${randomNumber}-${roleId}-${departmentId}`;

        // Query to check if the generated employee_id already exists in the database
        const query = {
            text: 'SELECT * FROM employee WHERE employee_id = $1',
            values: [employeeId]
        };

        // Execute the query
        const result = await pool.query(query);

        // If the employee_id already exists, call the function recursively until a unique employee_id is generated
        if (result.rows.length > 0) {
            return generateEmployeeId(roleId, departmentId);
        } else {
            // If the employee_id is unique, return it
            return employeeId;
        }
    } catch (error) {
        console.error('Error generating employee_id:', error.message);
        throw error;
    }
}

// GET route to fetch all employees
router.get("/employees", async (req, res) => {
    try {
        // Query to fetch all employees
        const query = `SELECT * FROM employee`;

        // Execute the query
        const { rows } = await pool.query(query);

        // Send the response with the fetched data
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// POST route to add a new employee
router.post("/employee", async (req, res) => {
    try {
        // Extract the data from the request body
        const { employee_name, username, password, role_id, department_id } = req.body;

        // Generate the employee_id
        const employee_id = await generateEmployeeId(role_id, department_id);

        // Query to add a new employee
        const query = {
            text: `INSERT INTO employee (employee_id, employee_name, username, password, role_id, department_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            values: [employee_id, employee_name, username, password, role_id, department_id]
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

module.exports = router;