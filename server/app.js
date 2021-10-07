const express = require('express');
const app = express();
const cors = require("cors");

// add middleware
app.use(
    cors({
        origin: "*",
    })
);

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// app.get('/', (request, response) => {
//     response.send("Hello World!");
// });

// app.get('/maxsop', (request, response) => {
//     let names = JSON.stringify(["Joy", "Tarikul", "Jayanta"]);
//     response.send(names);
// });

module.exports = app;