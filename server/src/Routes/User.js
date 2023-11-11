let express = require('express');
let router = express.Router();

const UserCreationController = require('../Controllers/userController');


router.get('/', function(req, res) {
    res.send('List All Users');
});

router.post('/',  UserCreationController);

router.get('/:id', function(req, res) {
    res.send('Fetch a User');
});
router.put('/:id', function(req, res) {
    res.send('Update a User');
});
router.delete('/:id', function(req, res) {
    res.send('Delete a User');
});



module.exports = router;
