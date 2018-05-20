var express = require('express');
var app = express();
var stylus = require('stylus');
app.use(express.static(process.argv[3]));
app.use(stylus.middleware(process.argv[3]));
app.listen(process.argv[2]);
//must install stylus to invoke css for individual projects
