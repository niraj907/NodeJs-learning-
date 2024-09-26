const express = require('express'); 
const router = express.Router(); // create the route object 
const homeController  = require('../controller/homeController');
const aboutController = require('../controller/aboutController');

router.get('/', homeController);
router.get('/about', aboutController);


module.exports = router;