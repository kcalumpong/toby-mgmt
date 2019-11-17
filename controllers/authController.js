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
    db.User
      .findOne({ where: { username: req.body.username } })
      .then(user => {
        if (!user) {
          res.status(401).send("username or password incorrect");
        }

        bcrypt.compare(req.body.password, user.hash)
          .then(match => {
            if (match) {
              req.session.user = user;
              res.send(200);
            } else {
              res.status(401).send("username or password incorrect");
            }
          })
          .catch(err => res.status(500).send(err.message))
      })
      .catch(err => res.status(500).send(err.message));
  },
  validateSession: (req, res) => {
    req.session.reload(() => {
      // console.log(decodeURIComponent(req.params.sid));
      const reqsid = decodeURIComponent(req.params.sid).split(':')[1].split('.')[0];
      console.log("REQUEST",reqsid, req.sessionID);
      // console.info('sid:', req.sessionID, reqsid);
      if (reqsid === req.sessionID) {
        res.send(200);
      } else {
        res.send(403);
      }
    })
  },
  logout: (req, res) => {
    console.info('before',req.session)
    req.session.destroy(err => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        console.info('after',req.session)
        res.sendStatus(200);
      }
    });
  }
};
