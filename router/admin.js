const express = require('express');
const router = express.Router();

const controller = require('../controller/admin')


router.post('/login', controller.signin);


router.post('/signup', controller.signup);



router.post('/logout', controller.signout);


module.exports = router;