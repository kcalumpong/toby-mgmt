const bcrypt = require('bcrypt');
const db = require('../models/');

module.exports = {
  verify: (username, password, done) => {
    db.User.findOne({ where: { username: username } })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username or password.' });
        }

        return bcrypt.compare(password, user.hash)
          .then(match => {
            if (match) {
              return done(null, user);
            }
            return done(null, false, { message: 'Incorrect username or password.' });
          })
          .catch(err => done(err));
      })
      .catch(err => done(err));
  },
  serializeUser: (user, done) => done(null, user.id),
  deserializeUser: (id, done) => {
    db.User.findOne({ where: {id: id} })
      .then(user => {
        done(null, user);
      })
      .catch(err => done(err));
  },
  isLoggedIn: (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.sendStatus(401);
    }
  }
};