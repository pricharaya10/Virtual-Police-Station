const express = require('express');
const router = express.Router();

const middle = require('../controller/midlleware')
const controller = require('../controller/complain')

router.param("complainId", controller.getComplainById )
router.post('/getall', controller.getAllComplain);


module.exports = router;

