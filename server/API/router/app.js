// Import required modules
const express = require('express');
const cors = require('cors');
const customerRouter = require('./customer');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use((req, res, next) => {
//   console.log('Time:', Date.now());
  next();
});

// Use the customer router for handling customer-related routes
app.use('/api/v1.0', customerRouter);

// Export the Express application
module.exports = app;
