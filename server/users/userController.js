  var User = require('./userModel.js');

module.exports = {
  signin: function (req, res) {
    console.log(req.body, req.data+"line 5 ")
    User.findOne({

      username:req.body.username,
      //userEmail:req.body.email,
     // userPhone:req.body.phone   	
    },
    function(err, users){
      if(err){
        throw err
        res.send("User does not exist")    
      }else{
        console.log(users)
        res.send(users)    
      }
    })
  },

  signup: function (req, res) {   
    console.log(req.body.phone)
    //console.log(req.body.username)
    User.create({
      username:req.body.username,
      //userEmail:req.body.email,
      phone:req.body.phone 
    },
    function(err, user){
      if(err){
        throw err
      }
      if(user){
        res.send(user)    
      }else{
        res.send('User already exist!')
      }
    })
  }
}

