const express = require('express'); 
const router = express.Router(); // create the route object 


router.get('/all',(req,res)=>{
    console.log('GET Methods');
  res.send('<h1>All teacher</h1>')
})
router.post('/create',(req,res)=>{
  console.log('POST Methods');
  res.send('<h1>Add New teacher</h1>')
})
router.put('/update',(req,res)=>{
  console.log('PUT Methods');
  res.send('<h1>update sucessful </h1>')
})
router.delete('/delete',(req,res)=>{
  console.log('DELETE Methods');
  res.send('<h1>data has been delete sucessful </h1>')
})

module.exports = router


//export default router