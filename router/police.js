const express = require('express');
const router = express.Router();

const controller = require('../controller/police')

router.param("policeId",controller.getPoliceById)

router.post('/login', controller.signin);

router.post('/signup', controller.signup);


router.post('/logout', controller.signout);


router.post('/getall',controller.getAllPolice)

router.post('/update',controller.updateUser)


router.post('/myfirs',controller.listAllFirs)

module.exports = router;