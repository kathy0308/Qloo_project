// app.js
const express = require('express');
const app = express();
const port = 3004;

// Import routes
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Use routes
app.use('/api', postRoutes);
app.use('/api', userRoutes);
app.use('/api', commentRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});