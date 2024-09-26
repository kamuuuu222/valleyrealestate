const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public'))); // Adjust the path to public

// Serve the homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html')); // Adjust the path to index.html
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, contact, message } = req.body;
    console.log('Form submitted:', { name, contact, message });
    res.send('Form submitted successfully!');
});

// Export the Express app
module.exports = app;