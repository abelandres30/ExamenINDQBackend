const express =  require('express');    
const router = express.Router();
const EventsCtrl = require('../controllers/Events.controller');
const upload = require('../libs/storage');

router.get('/', EventsCtrl.getEvents);
router.post('/', upload.single('image') , EventsCtrl.createEvents);
router.get('/:id', EventsCtrl.getEvents)
router.put('/:id', EventsCtrl.putEvent);
router.delete('/:id', EventsCtrl.deleteEvent);

module.exports = router;