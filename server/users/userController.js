var Q = require('q');
var User = require('./userModel.js');
var jwt = require('jwt-simple');


var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  signin: function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   console.log(username)
   User.findOne({username: username}).exec()
   .then(function (user) {
     if(!user){
      throw new Error('User not found')
    }else{

      var token = jwt.encode(user, 'secret');
     return res.json({token: token});
    
    }
  })
 },

 signup: function (req, res) {
  var username = req.body.username;
  var password = req.body.password;  
  var phonenum = req.body.phone;
  console.log(username)
  console.log('im in contrllers')
  
  var  newUser = new User(req.body);
  
     console.log(newUser)
     newUser.save(function(err,user){
      if(err){
        throw err
      }
      var token = jwt.encode(user, 'secret');
      return res.json({token: token});
    })
  
},
checkAuth: function (req, res) {

  var token = req.headers['x-access-token'];
  if (!token) {
    throw new Error('No token')
  } else {
    var user = jwt.decode(token, 'secret');
    User.findOne({username: user.username}).exec()
    .then(function (foundUser) {
      if (foundUser) {
        res.send(200);
      } else {
        res.send(401);
      }
    })
  }
}
}