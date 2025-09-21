// server.js
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config'); // updated to match your file name

// Import routes
const index = require('./routes/index');
const image = require('./routes/image');

// Initialize app
const app = express();

// Environment (development / production / test)
const env = process.env.NODE_ENV || 'development';

// Connect to MongoDB
mongoose.connect(config.mongoURI[env], {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected to MongoDB (${env})`))
.catch(err => console.error('MongoDB connection error:', err));

// Test connection
const db = mongoose.connection;
db.once('open', () => {
    console.log('Database connection is open');
});

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

// Start server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
