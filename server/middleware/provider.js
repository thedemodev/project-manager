const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

// Variables from process environment
const {
    SESSION_SECRET
} = process.env;

// Function to provide middleware to server
exports.provider = app => {
    app.use(express.json());
    app.use(cors());
    app.use(passport.initialize());
    app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {secure: true, maxAge: 60000}
    }));
};