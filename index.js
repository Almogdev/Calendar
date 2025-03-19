//Libs used: express, body-parser, mysql2, path
const port = 3000;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));


app.listen(port, () => {
        console.log(`Listening on port: ${port}` );
});