const router = require('express').Router();
const passport = require('passport')
const authController = require('../../controllers/authController');
const auth = require('../../utils/auth');

router.route('/')
  .delete(authController.logout);

// Matches with '/api/auth/signup'
router.route('/signup')
  .post(authController.signup);

// Matches with '/api/auth/login'
router.route('/login')
  .post(passport.authenticate('local'), authController.login);

router.route('/session/')
  .get(auth.isLoggedIn, (req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
