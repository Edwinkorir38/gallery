// routes/index.js
const express = require('express');
const router = express.Router();
const Image = require('../models/images'); // Import Image model

// GET homepage
router.get('/', async (req, res) => {
  try {
    // Fetch all images from DB, newest first
    const images = await Image.find({}).sort({ date: -1 });

    // Render index.ejs with images
    res.render('index', { 
      title: 'Home Page', 
      images 
    });
  } catch (err) {
    console.error('Error fetching images:', err);
    // Render page with empty images array instead of crashing
    res.render('index', { 
      title: 'Home Page', 
      images: [] 
    });
  }
});

module.exports = router;
