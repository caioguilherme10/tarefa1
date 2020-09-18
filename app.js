const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/status', (req, res, next) => {
    res.send('OK');
} )

app.listen(3001);
