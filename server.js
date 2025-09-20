const express = require('express');
const bodyParser = require('body-parser');  // you can remove this if unused
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// MongoDB Atlas connection
const dbURI = 'mongodb+srv://Edwinkorir38:Hakuna123@cluster0.qzalcrk.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Test if the database has connected successfully
let db = mongoose.connection;
db.once('open', ()=>{
    console.log('Database connected successfully');
});

// Initialize the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
