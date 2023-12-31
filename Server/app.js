const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Use cors middleware to enable CORS for all routes
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Collection API routes
app.use('/api/collection', require('./routes/api/collections'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
