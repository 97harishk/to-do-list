const express = require('express');
const router  = express.Router();
const listController = require('../controllers/list_controller');
router.post('/create',listController.create);
module.exports = router;