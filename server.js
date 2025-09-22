// server.js
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();

// connecting the database

const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env]
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(`Connected to Database: ${MONGODB_URI}`)
    }
});

// test if the database has connected successfully
// let db = mongoose.connection;
// db.once('open', ()=>{
//     console.log('Database connected successfully')
// })




// View Engine
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



 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});


module.exports = app;