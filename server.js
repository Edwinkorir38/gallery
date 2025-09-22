// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Routes
const index = require('./routes/index');
const image = require('./routes/image');

// Initialize app
const app = express();

// Connect to database
const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env];
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to Database: ${MONGODB_URI}`))
  .catch(err => console.error('DB Connection Error:', err));

// View engine
app.set('view engine', 'ejs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', index);
app.use('/image', image);

// Start server only if NOT in test mode
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || config.port || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
