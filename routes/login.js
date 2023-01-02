let User = require('../model/login');
var config = require('../config'); // get config file

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');

// Authentification (POST)
function login(req, res){
 
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
      
        console.log(user);
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({
             id: user._id,
            name:user.name,
            username:user.username,
            role:user.role }, config.secret, {
          expiresIn: 86400
          // expires in 24 hours
        });
        
        res.status(200).send({ auth: true, token: token });
      });

   
}




module.exports = {  login };
