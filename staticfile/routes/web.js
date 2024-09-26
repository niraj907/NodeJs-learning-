const express = require('express'); 
const router = express.Router(); // create the route object 
const homeController  = require('../controller/homeController');

router.get('/', homeController);
module.exports = router;