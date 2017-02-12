var express = require('express');
var mongoose = require('mongoose');

var app = express();





app.use(express.static(__dirname + '/client'));
// start listening to requests on port 8000
app.listen(8000);

// export our app for t
