//Libs used: express, body-parser, mysql2, path
const port = 3000;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname,"./views"));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"/views/mainPage.html"));
});

app.listen(port, () => {
        console.log(`Listening on port: http://localhost:${port}`);
});