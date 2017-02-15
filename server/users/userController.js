var User = require('./userModel.js');
var jwt = require('jwt-simple');

module.exports = {
  signin: function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   User.findOne({username: username})
   .then(function (user) {
     if(!user){
      throw new Error('User not found')
    }else{
      if(password === user.password){
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      }else{
        return new Error('Wrong password');
      }
    }
  })
 },

 signup: function (req, res) {
  var username = req.body.username;
  var password = req.body.password;  
  var phonenum = req.body.phone;

  User.findOne({username:username})
  .then(function (user) {
    if(user == null){
      throw new Error('User already exist!');
    }else{
      User.create({
        username:username,
        password:password,
        phone:phonenum 
      })
    }
  })
  .then(function (user) {
    var token = jwt.encode(user, 'secret');
    res.json({token: token});
  })
},
checkAuth: function (req, res) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      throw new Error('No token')
    } else {
      var user = jwt.decode(token, 'secret');
      findUser({username: user.username})
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