const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to our home page, Netta!https://aws.amazon.com/")
});

const port = process.env.port || 3001; 
app.listen(port, () => {
    console.log("Hello from AWS!");
});