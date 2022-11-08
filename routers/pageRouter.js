const router = require('express').Router();
const pageController = require('../controllers/pageController')

router.get('/login', pageController.getLoginPage);
router.get('/register', pageController.getRegisterPage);
router.get('/home', pageController.getHomePage);



module.exports = router;