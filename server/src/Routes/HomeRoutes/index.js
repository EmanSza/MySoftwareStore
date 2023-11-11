let express = require('express');
let router = express.Router();

let mainRoute = require('./Routes/Main');

router.use('/', mainRoute);

module.exports = router;
