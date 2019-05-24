require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const middleware = require('./middleware/provider');
const database = require('./db/connection/bootstrap.database');
const router = require('./routers/router');

// Express Setup
const app = express();

// Database Connection
database.connect(app);

// Middleware
middleware.provider(app);

// Routes
router.addRoutes(app);

// Server Running
app.listen(4040, () => console.log(chalk.magenta('Server is running 🔥')));