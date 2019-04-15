const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//Destructured Versioon is live
const {Schema} = mongoose;

studioTypeSchema = new Schema({
    _user: String,
   1: String,
   2: String,
   3: String,
   4: String,
   5: String,
});
//Mongo two arguments mean load something in
//1 argument means take data out
 mongoose.model('studiotypes', studioTypeSchema);


