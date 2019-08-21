const express = require('express');
const router  = express.Router();
const homeController = require('../controllers/home_controller');
const listController = require('../controllers/list_controller');

router.get('/',listController.list);
router.post('/create',listController.create);
router.get('/delete',listController.delete);
module.exports = router;