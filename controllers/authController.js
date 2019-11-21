const bcrypt = require('bcrypt');
const db = require('../models/');

// Defining methods for the authController
module.exports = {
  signup: (req, res) => {
    bcrypt.genSalt()
      .then(salt => {
        // console.log(salt)
        bcrypt.hash(req.body.password, salt)
          .then(hash => {
            db.User
              .create({ username: req.body.username, hash })
              .then(newUser => {
                req.session.user = newUser;
                res.send(200);
                console.log(newUser)
                
              })
              .catch(err => { console.error(err); res.status(500).send(err.message) });
          })
          .catch(err => res.status(500).send(err.message));
      })
      .catch(err => res.status(500).send(err.message));
  },
  login: (req, res) => {
    res.json(req.user);
  },
  logout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  }
};
