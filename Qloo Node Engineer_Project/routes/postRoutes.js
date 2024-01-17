// routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
// Add other post-related routes here

module.exports = router;
