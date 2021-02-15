const express = require('express');
const upload = require('../libs/storage');
const Imagenesctrl = require('../controllers/imagenes.controller');
const router = express.Router();

router.get('/', Imagenesctrl.getImagenes);
router.post('/', Imagenesctrl.createImagenes);
router.delete('/:id', Imagenesctrl.deleteImagenes);
module.exports = router;