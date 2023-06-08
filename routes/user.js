const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/home', userController.homePage);
router.get('/register', userController.registerPage);
router.get('/login', userController.loginPage);

module.exports = router;
