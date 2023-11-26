const express = require('express');
const router = express.Router();
const AuthMiddle = require('../Middleware/AuthMiddleware');
const authController = require('../Controllers/authController');

router.post('/signin', authController.signin(req, res));

router.get('/signout', AuthMiddle, function(req, res) {
    res.send('Sign out the User');
});




module.exports = router;
