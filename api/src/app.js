const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(router);

const cors = require('cors')
// CORS
app.use((req, res, next) => {
    console.log('Api consumida!')
    res.header('Access-Control-Allow-Origin', '*')
    app.use(cors())
    next()
})

module.exports= app;
