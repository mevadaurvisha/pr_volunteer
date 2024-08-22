const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routers/router');
const app = express();
const port = process.env.PORT || 3004;
const PATH = path.join(__dirname, '/views');

app.set("view engine" , "ejs");
app.set("views" , PATH);

app.use(express.static(PATH));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port , (err) => {
    if(!err){
        console.log(`server is running on http://localhost:${port}`);
    }
})
