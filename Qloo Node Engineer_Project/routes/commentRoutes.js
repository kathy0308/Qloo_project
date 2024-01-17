// routes/commentRoutes.js
const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/comments', commentController.getAllComments);
// Add other comment-related routes here

module.exports = router;
