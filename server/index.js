require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const middleware = require('./middleware/provider');
const database = require('./db/connection/bootstrap.database');

// Express Setup
const app = express();

// Database Connection
database.connect(app);

// Middleware
middleware.provider(app);

// Server Running
app.listen(4040, () => console.log(chalk.magenta('Server is running 🔥')));