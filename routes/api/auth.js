const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/')
  .delete(authController.logout);

// Matches with '/api/auth/signup'
router.route('/signup')
  .post(authController.signup);

// Matches with '/api/auth/login'
router.route('/login')
  .post(authController.login);

router.route('/session/:sid')
  .get(authController.validateSession);

module.exports = router;
