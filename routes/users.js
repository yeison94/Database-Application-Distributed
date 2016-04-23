//File: routes/tvshows.js
module.exports = function(app) {

  var User = require('../models/user.js');


 //GET - Validate user using email and password
  findByEmailPassword = function(req, res) {

    var Email = req.params.email;
    var SizeEmail = req.params.email.length;
    var EmailUser = Email.substring(1,SizeEmail);

    var Pass = req.params.password;
    var SizePas = req.params.password.length;
    var PasswordlUser = Pass.substring(1,SizePas);


    User.findOne({email : EmailUser, password : PasswordlUser}, function(err, user) {
      if(!err) {
        if(user != null){
          console.log("EL USUARIO EXISTE");
          res.json({UserId: user.email, externalID : user.externalID, isSuccess : true ,error : null});
        }else{
          console.log("EL USUARIO NO EXISTE");
          res.json({UserId: EmailUser, externalID : null, isSuccess : false ,error : null});
        }
        
      } else {
        console.log('ERROR: ' + err.name);
        res.json({UserId: EmailUser, externalID : null, isSuccess : false ,error : err.name});
      }
    });
  };

  //GET - Verify email exist
  findByEmail = function(req, res) {

    var Email = req.params.email;
    var SizeParam = req.params.email.length;
    var EmailUser = Email.substring(1,SizeParam);



  	User.findOne({email : EmailUser}, function(err, user) {
  		if(!err) {
        if(user != null){
          console.log("SE ENCONTRO COINCIDENCIA");
          res.json({success: true, id : user.email, error : null});
        }else{
          console.log("NO SE ENCONTRO COINCIDENCIA");
          res.json({success: false, id : EmailUser, error : null});
        }
  			
  		} else {
  			console.log('ERROR: ' + err.name);
        res.json({success: false, id : EmailUser, error : err.name});
  		}
  	});
  };

  //POST - Insert a new User in the DB
  RegisterUser = function(req, res) {

  	var user = new User({
  		name:    req.body.name,
      email:    req.body.email,
      password:  req.body.password,
      gender:   req.body.gender,
      picture:  req.body.picture,
      externalID:    req.body.externalID  
  	});

  	user.save(function(err) {
  		 
      if(!err) {
        console.log('User registrated');
        res.json({UserId : req.body.email, isSuccess : true, error : null });     
      } else {
        console.log('ERROR: ' + err);
        res.json({UserId : req.body.email,isSuccess : false, error : err.name});    
      }
  	});
  };


  //Link routes and functions
  app.get('/users/:email/:password',findByEmailPassword);
  app.get('/users/:email', findByEmail);
  app.post('/users', RegisterUser);

}