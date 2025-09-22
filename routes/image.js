// routes/image.js
const express = require('express');
const router = express.Router();
const Image = require('../models/images');

// Get single image
router.get('/:id', async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) return res.status(404).send('Image not found');
        res.render('singleImage', { title: 'Single Image', image });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Update image
router.put('/:id', async (req, res) => {
    try {
        const updated = await Image.updateOne(
            { _id: req.params.id },
            { $set: { name: req.body.name } },
            { upsert: true }
        );
        res.json({ success: true, result: updated });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Delete image
router.delete('/:id', async (req, res) => {
    try {
        await Image.deleteOne({ _id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
