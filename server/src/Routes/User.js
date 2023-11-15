let express = require('express');
let router = express.Router();

const userController = require('../Controllers/userController');


router.get('/', function(req, res) {
    res.send('List All Users');
});

router.post('/',  userController.createUser);

router.get('/:id', userController.fetchUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);



module.exports = router;
