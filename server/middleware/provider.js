const express = require('express');
const cors = require('cors');

// Function to provide middleware to server
exports.provider = app => {
    app.use(express.json());
    app.use(cors());
};