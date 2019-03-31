var dotenv = require('dotenv');
dotenv.load();
const _ = require('lodash');
//const Path = require('path-parser');
const multer = require("multer");
const path = require("path");
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const passport = require('passport')
const keys = require('../config/keys');


require('../models/Studio.js');
require('../models/StudioBooked.js');
require('../models/User.js');
require('../models/Availibility.js');
require('../services/passport.js');

const Studio = mongoose.model('studio');
const Availibility = mongoose.model('availibility');
const Booked = mongoose.model("studioBooked");





mongoose.connect(keys.mongoURI);






module.exports = (app) => {


    app.post('/api/post-listing-time', async (req, res) => {


        const {starttime, endtime, day, studioname} = req.body
        let studioName = studioname;
        //delete req.body.studioname;
        console.log(req.body)
        console.log(studioname)
       const studioUpdate = await Studio.update(
            { studioName:studioName},
            {$push: { availibility: req.body}
            })
        
            console.log(studioUpdate)
     
        
        // else{
        //    let availibility = new Availibility({ 
        //     _user: req.user.id,
        //     day,
        //     starttime,
        //     endtime
          
        //     }).save();
        // }
         
        });
        
    

app.post('/api/post-listing', async (req, res) => {
    
const {name, phone, venue, address1, address2, postalCode, region, city, email, isPremium, price, rules, guest, studioName, studioImage, studioType, hoursOfOperation} = req.body
const existingUser = await Studio.findOne({_user: req.user.id, address1, city, postalCode})
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
    hoursOfOperation,
    studioType,
    studioImage,
    }).save();
}
 
});


app.get('/api/studio-listing', async (req, res) => {

    // const studio = await Studio.find({}, function (err, studio) {
    //     res.send(studio);
    // });

    const studio = await Studio.find({}, function (err, studio) {
        res.send(studio);
    });
    //.select({isListed: true});   
});


app.get('/api/availibility', async (req, res) => {

    const availibility = await Availibility.find({}, function (err, availibility) {
        res.send(availibility);
    });
   
});

app.get('/api/studioBooked', async (req, res) =>{

    const booked = await Booked.find({}, function (err, booked) {
        res.send(booked);
    });

});

}
