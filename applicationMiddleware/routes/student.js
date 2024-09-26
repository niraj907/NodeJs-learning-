const express = require('express'); 
const router = express.Router(); // create the route object 
const studentController  = require('../controllers/studentController');

const myLogger = require('../middlewares/loggerMiddleware');
// router level middleware
//router.use(myLogger)
router.use(('/student'),myLogger)


router.get('/student', studentController);
router.get('/event', (req,res)=>{
    res.send('event')
});
module.exports = router;