var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	name: 		{ type: String },
	email: 		{ type: String },
	password: 	{ type: String },
	gender:  	{ type: String, enum :
					['Male', 'Female']
				},
	picture: 	{ type: Array },
	externalID: { type: String }   
});

//La coleccion se llamara Users, ya que mongo toma el plural
module.exports = mongoose.model('User', userSchema);
