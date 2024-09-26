const express = require('express'); 
const router = express.Router(); // create the route object 
const homeController  = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/about/12', (req,res)=>{
res.send('<h1> /about/12 </h1>');
});


module.exports = router;