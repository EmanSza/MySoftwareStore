const express = require('express');
const router = express.Router();
const AuthMiddle = require('../Middleware/AuthMiddle');
const authController = require('../Controllers/authController');

router.post('/signin', authController);

router.get('/signout', AuthMiddle, function(req, res) {
    res.send('Sign out the User');
});




module.exports = router;
