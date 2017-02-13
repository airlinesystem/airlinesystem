r express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//////*****/////
var mongoURI =  process.env.MONGODB_URI || 'mongodb://localhost/posts';
mongoose.connect(mongoURI);


  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

//app.use(express.static("/Users/admin/Desktop/fullStack project/app"));
//require('./config/routes.js')(app, express);
app.listen(process.env.PORT || 8000,function(){

console.log('server is listning',8000)	
});

module.exports = app;