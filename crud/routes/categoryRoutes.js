const express = require('express'); 
const router = express.Router(); // create the route object 
const {createDoc,editDoc,getAllDoc,updateDocByID,deleteDocByID} = require('../controller/categoryController');

router.get('/', getAllDoc);
router.post('/', createDoc);
router.get('/edit/:id', editDoc);
router.post('/update/:id', updateDocByID);
router.post('/delete/:id', deleteDocByID);


module.exports = router;