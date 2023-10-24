const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')

const app = express();

app.use(bodyParser.json);

app.use(cors());

app.get("/login-request", (req, res) => {
    console.log(req.body)
})




app.listen(/*process.env.PORT ||*/ 5000);