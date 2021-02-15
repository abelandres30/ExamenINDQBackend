const express =  require('express');    
const router = express.Router();
const UsersCtrl = require('../controllers/Users.controller');

router.get('/', UsersCtrl.getUsers);
router.post('/',UsersCtrl.createUsers);
router.get('/:id', UsersCtrl.getUser)
router.put('/:id', UsersCtrl.putUser);
router.delete('/:id', UsersCtrl.deleteUser);
module.exports = router;