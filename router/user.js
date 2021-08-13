const express = require('express');

const router = express.Router();

const controller = require('../controller/user')

const {addFir , findFirByUserId} = require('../controller/fir')

const {addEvent,findEventByUserId} = require('../controller/event')

const {addComplain,findComplainByUserId} = require('../controller/complain')

router.param("userId",controller.getUserById)

router.post('/login', controller.signin);

router.post('/signup', controller.signup);

router.post('/logout', controller.signout);

router.post('/getone',controller.getUser)
router.post('/getall',controller.getAllUsers)

router.post('/update',controller.updateUser)

router.post('/addFir',addFir)

router.post('/myfirs',findFirByUserId)

router.post('/addEvent',addEvent)

router.post('/myevents',findEventByUserId)

router.post('/addComplain',addComplain)

router.post('/mycomplains',findComplainByUserId)

module.exports = router;