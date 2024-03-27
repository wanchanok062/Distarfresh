// Import required modules
const express = require('express');
const cors = require('cors');
const customerRouter = require('./customer');
const customerTypeRouter = require('./customer_type');
const memberStatusRouter = require('./member_status');
const memberTypeRouter = require('./member_type');
const paymentStatusRouter = require('./payment_status');
const employeeRoleRouter = require('./employee_role');
const productCategoryRouter = require('./product_category');
const operationRouter = require('./operation');
const departmentRouter =require('./department');
const productsRouter = require('./products');
const employeeRouter = require('./employee');
const cookieParser = require('cookie-parser');
const authen = require('./authen'); 
const orderRouter = require('./order');
const orderDetailsRouter = require('./order_details');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Custom middleware
app.use((req, res, next) => {
//   console.log('Time:', Date.now());
  next();
});

// Use the customer router for handling customer-related routes
app.use('/api/v1.0', customerRouter);
app.use('/api/v1.0', customerTypeRouter);
app.use('/api/v1.0', memberStatusRouter);
app.use('/api/v1.0', memberTypeRouter);
app.use('/api/v1.0', paymentStatusRouter);
app.use('/api/v1.0', employeeRoleRouter);
app.use('/api/v1.0', productCategoryRouter);
app.use('/api/v1.0', operationRouter);
app.use('/api/v1.0', departmentRouter);
app.use('/api/v1.0', productsRouter);
app.use('/api/v1.0', employeeRouter);
app.use('/api/v1.0', authen);
app.use('/api/v1.0', orderRouter);
app.use('/api/v1.0', orderDetailsRouter);


// Export the Express application
module.exports = app;
