//File: routes/tvshows.js
module.exports = function(app) {

  var User = require('../models/user.js');

  // //GET - Return all tvshows in the DB
  // findAllTVShows = function(req, res) {
  // 	TVShow.find(function(err, users) {
  // 		if(!err) {
  //       console.log('GET /tvshows')
  // 			res.send(tvshows);
  // 		} else {
  // 			console.log('ERROR: ' + err);
  // 		}
  // 	});
  // };

  // //GET - Return a TVShow with specified ID
  // findById = function(req, res) {
  // 	TVShow.findById(req.params.id, function(err, tvshow) {
  // 		if(!err) {
  //       console.log('GET /tvshow/' + req.params.id);
  // 			res.send(tvshow);
  // 		} else {
  // 			console.log('ERROR: ' + err);
  // 		}
  // 	});
  // };

  //POST - Insert a new TVShow in the DB
  addUser = function(req, res) {

    var JSONresponse;

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
        res.json({UserId : req.body.email, isSuccess : true,error : null });     
      } else {
        console.log('ERROR: ' + err);
        res.json({UserId : req.body.email,isSuccess : false, error : err.name});    
      }
  	});
  };

  // //PUT - Update a register already exists
  // updateTVShow = function(req, res) {
  // 	TVShow.findById(req.params.id, function(err, tvshow) {
  // 		tvshow.title   = req.body.petId;
  // 		tvshow.year    = req.body.year;
  // 		tvshow.country = req.body.country;
  // 		tvshow.poster  = req.body.poster;
  // 		tvshow.seasons = req.body.seasons;
  // 		tvshow.genre   = req.body.genre;
  // 		tvshow.summary = req.body.summary;

  // 		tvshow.save(function(err) {
  // 			if(!err) {
  // 				console.log('Updated');
  // 			} else {
  // 				console.log('ERROR: ' + err);
  // 			}
  // 			res.send(tvshow);
  // 		});
  // 	});
  // }

  // //DELETE - Delete a TVShow with specified ID
  // deleteTVShow = function(req, res) {
  // 	TVShow.findById(req.params.id, function(err, tvshow) {
  // 		tvshow.remove(function(err) {
  // 			if(!err) {
  // 				console.log('Removed');
  // 			} else {
  // 				console.log('ERROR: ' + err);
  // 			}
  // 		})
  // 	});
  // }

  //Link routes and functions
  // app.get('/tvshows', findAllTVShows);
  // app.get('/tvshow/:id', findById);
  app.post('/user', addUser);
  // app.put('/tvshow/:id', updateTVShow);
  // app.delete('/tvshow/:id', deleteTVShow);

}