const express = require('express'); 
const router = express.Router(); // create the route object 
const { allStudents, deleteAll } = require('../controllers/studentController');

router.get('/all', allStudents);
router.get('/delete/:id([0-9]{2})', deleteAll);

module.exports = router;
