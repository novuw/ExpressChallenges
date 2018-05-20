var express = require('express');
var app = express();
var path = require('path');

app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.use('/home', function(req, res){
   res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
//if you are making on your own compouter, install jade/pug with npm 
