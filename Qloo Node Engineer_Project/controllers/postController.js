// controllers/postController.js
const Post = require('../models/postModel');

const postController = {
  getAllPosts: (req, res) => {
    res.json({
      message: 'Data fetched successfully!',
      data: postStore,
      timestamp: new Date().toISOString(),
    });
  },

  createPost: (req, res) => {
    const inputData = req.body;
    const newPost = new Post(inputData.userId, inputData.id, inputData.title, inputData.body);
    postStore.push(newPost);

    const responseWithTimestamp = {
      ...newPost,
      timestamp: new Date().toISOString(),
    };

    res.json(responseWithTimestamp);
  },

  // Add other post-related logic here
};

module.exports = postController;
