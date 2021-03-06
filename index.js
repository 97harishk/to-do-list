const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const db = require('./config/mongoose');
const List = require('./models/list');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));
app.use(express.urlencoded());
app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log("Error in running express!");
    }
    console.log(`Express server is running on port:${port}`);
});
