const express = require('express');
const passport = require('passport');

// Auth Controller
const AuthController = require('../controllers/auth.controller');

// Auth Router
const AuthRouter = express.Router();

// Routes
AuthRouter.post('/login', passport.authenticate('login'), AuthController.login);

// Export Router
module.exports = {
    AuthRouter
};