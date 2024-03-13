// Import required modules
const express = require('express');
const cors = require('cors');
const customerRouter = require('./customer');
const customerTypeRouter = require('./customer_type');
const memberStatusRouter = require('./member_status');

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
app.use('/api/v1.0', customerTypeRouter);
app.use('/api/v1.0', memberStatusRouter);


// Export the Express application
module.exports = app;
