const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const cors = require('cors');
const { createUser } = require('./db/db');



app.use(bodyParser.json());

app.use(cors());

app.post("/login-request", (req, res) => {
    console.log(req.body)
    createUser(req.body)
    res.json("done")
})

app.listen(5005);