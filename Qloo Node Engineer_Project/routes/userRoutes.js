// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/filter-users/:criteria/:value', userController.filterUsers);
// Add other user-related routes here

module.exports = router;
