
const express = require('express');

const router = express.Router();

const controller = require('../controller/aadhar')

router.post('/add', controller.add);

module.exports = router;