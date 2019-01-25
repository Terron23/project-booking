var dotenv = require('dotenv');
dotenv.load();
const _ = require('lodash');
//const Path = require('path-parser');
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const passport = require('passport')
const keys = require('../config/keys');
const upload = multer({
    dest: "../temp"
    });

require('../models/Studio.js');
require('../models/User.js');
require('../services/passport.js');

const Studio = mongoose.model('studio');





mongoose.connect(keys.mongoURI);






module.exports = (app) => {


app.post('/api/post-listing', upload.single("file"), async (req, res) => {
    
    const tempPath = req.file;
   console.log(tempPath);
// cloudinary.v2.uploader.upload("https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
// function(error, result) {console.log("Test", result, error)});

const {name, phone, venue, address1, address2, postalCode, region, city, email, isPremium, price, rules, guest, studioName, studioImage} = req.body
const existingUser = await Studio.findOne({_user: req.user.id, address1:address1, city, postalCode})

console.log(req.body)
if(existingUser){
   res.send("Studio Already Exists")
   console.log("Studio Already Existis")
}

else{
   let studio = new Studio({ 
    _user: req.user.id,
    name,
    phone,
    venue,
    address1,
    address2,
    postalCode,
    region,
    city,
    email,
    isListed: true,
    studioName,
    guest,
    price,
    rules,
    studioImage,
    }).save();
}
 
    //res.send(studio);
});


app.get('/api/studio-listing', async (req, res) => {

    const studio = await Studio.find({}, function (err, studio) {
        res.send(studio);
    });
    //.select({isListed: true});
  
      
});

}
