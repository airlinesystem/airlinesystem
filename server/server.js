var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//////*****/////
// var mongoURI = '';
// mongoose.connect(mongoURI);
mongoose.connect('mongodb://kaka:123@ds153709.mlab.com:53709/my_db');

//mongoose.connect('mongodb://localhost/airline')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('./client'));

require('./config/routes.js')(app, express);
var PORT = process.env.PORT || 8080;
app.listen(PORT ,function(){
	console.log('server is listning '+ PORT)	
});

module.exports = app;
