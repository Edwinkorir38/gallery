// routes/index.js
const express = require('express');
const router = express.Router();

// Example route (homepage)
router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

module.exports = router;   // ✅ must export router directly
