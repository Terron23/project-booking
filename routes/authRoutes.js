const mongoose = require('mongoose');
const passport = require('passport');
var stripe = require("stripe")("sk_test_V6wlaNvsxc7i7lpa0BfseByb");
const keys = require('../config/keys');


require('../models/StudioBooked.js');


const StudioBooked = mongoose.model('studioBooked');

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:



module.exports = (app) => {

app.get('/auth/google', passport.authenticate('google', {
    
    scope: ['profile', 'email']
  
}));

app.get('/auth/google/callback', passport.authenticate('google'),

(req, res) =>{
    res.redirect('/')
}
);


app.get('/auth/facebook', passport.authenticate('facebook'));


app.get('/auth/facebook/callback', passport.authenticate('facebook'), 
  (req, res) =>{
    res.redirect('/')
}
);

app.get('/api/logout', (req, res)=>{
req.logout();
res.redirect('/');
});

app.get('/api/current_user', (req, res)=>{
res.send(req.user);

});


app.post("/api/payment" , async (req, res) => {
    //const token = req.body.stripeToken; // Using Express
    console.log(req.body)
    let { 
      studioOwner,
      studioName,
      studioId,
      dateBooked,
      payment,
      cardInfo,} = req.body;
    try {
        let {status} = await stripe.charges.create({
          amount: 2000,
          currency: "usd",
          description: "An example charge",
          source: req.body.token
        });

        let studio = new StudioBooked({ 
          _user: req.user.id,
          studioOwner,
          studioName,
          studioId,
          dateBooked,
          payment,
          cardInfo,
          
          }).save();
    
        res.json({status});
      } catch (err) {
        res.status(500).end();
      }
})

}
