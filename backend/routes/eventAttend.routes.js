const express =  require('express');    
const router = express.Router();
const AttendCtrl = require('../controllers/EventAttend.controller');

router.get('/', AttendCtrl.getAttend);
router.post('/', AttendCtrl.createEventAttend);
router.get('/:id', AttendCtrl.getEventAttend)
router.put('/:id', AttendCtrl.putEventAttend);
router.delete('/:id', AttendCtrl.deleteEventAttend);
module.exports = router;