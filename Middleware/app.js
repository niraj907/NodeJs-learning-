// import express 
const express = require('express');

// craete an express application
const app = express(); // app variable will be used to set up rites and middleware

// middleware fuction
app.use(function(req, res, next) {
    console.log('Logged');
    next();
});

//start the Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
