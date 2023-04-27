const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the home page!")
});

const port = process.env.port || 3001; 
app.listen(port, () => {
    console.log("Hello from AWS!");
});