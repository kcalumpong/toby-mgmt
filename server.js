require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");
const bodyParser = require('body-parser');
const routes = require('./routes/');
const db = require("./models");
const auth = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

console.log(PORT)

passport.use(new LocalStrategy(auth.verify));
passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);


//For BodyParser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.set("trust proxy", 1); // trust first proxy
const cookieSecure = process.env.NODE_ENV === "production";
app.use(
  session({
    secret: process.env.COOKIE_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 5, secure: cookieSecure }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);


let syncOptions = { force: false };

// Serve up static assets (usually on heroku)
if(process.env.NODE_ENV === "test"){
  syncOptions.force = true;
}   

// Start the API server
db.sequelize.sync(syncOptions).then( () => {
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});

module.exports = app;
