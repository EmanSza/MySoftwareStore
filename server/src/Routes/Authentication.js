var express = require('express');
var router = express.Router();


router.post('/signin', function(req, res) {
    res.send('Sign in the User');
});
router.get('/signout', function(req, res) {
    res.send('Sign out the User');
});




module.exports = router;
