const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const cors = require('cors')



app.use(bodyParser.json());

app.use(cors());

app.post("/login-request", (req, res) => {
    console.log(req.body)
    res.send("done")
})

app.listen(5005);