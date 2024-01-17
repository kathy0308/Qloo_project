// controllers/userController.js
const User = require('../models/userModel');

const userController = {
  getAllUsers: (req, res) => {
    res.json({
      message: 'Users fetched successfully!',
      data: usersStore,
      timestamp: new Date().toISOString(),
    });
  },

  filterUsers: (req, res) => {
    const criteria = req.params.criteria;
    const value = req.params.value;

    if (!['id', 'name', 'username', 'email'].includes(criteria)) {
      return res.status(400).json({ message: 'Invalid filter criteria' });
    }

    const filteredUsers = usersStore.filter(user => user[criteria] == value);

    res.json({
      message: `Users filtered by ${criteria} ${value} successfully!`,
      filteredUsers: filteredUsers,
      timestamp: new Date().toISOString(),
    });
  },

  // Add other user-related logic here
};

module.exports = userController;
