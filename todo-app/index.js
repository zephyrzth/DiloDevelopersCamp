const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use("/src", express.static(path.join(__dirname + '/src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});