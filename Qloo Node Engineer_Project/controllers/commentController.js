// controllers/commentController.js
const Comment = require('../models/commentModel');

const commentController = {
  getAllComments: (req, res) => {
    res.json({
      message: 'Comments fetched successfully!',
      data: commentsStore,
      timestamp: new Date().toISOString(),
    });
  },

  // Add other comment-related logic here
};

module.exports = commentController;
