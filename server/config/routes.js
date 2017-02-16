var userController = require('../users/userController.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
module.exports = function (app, express) {
	app.post('/api/users/signin', userController.signin);
	app.post('/api/users/signup', userController.signup);
	app.get('/api/users/signedin', userController.checkAuth); 


	app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
};


 
