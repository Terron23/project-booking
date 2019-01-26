const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const studioOwners = require('./routes/studioOwners');
const keys = require('./config/keys');
require('./models/User.js');
require('./models/Studio.js');
require('./services/passport.js');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);


app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

authRoutes(app);
studioOwners(app);

app.get('/test', (req, res) => {
    //res.send({"t": keys.googleClientID})
    res.sendFile(__dirname, "/client/build/index.html")
  });



const PORT = process.env.PORT || 5000;

app.listen(PORT)