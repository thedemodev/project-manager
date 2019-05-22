require('dotenv').config();
const express = require('express');
const middleware = require('./middleware/provider');

// Express Setup
const app = express();

// Middleware
middleware.provider(app);

// Server Running
app.listen(4040, () => console.log('Server is running 🔥'));