const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('<h1>Get Method!</h1>')
})

// chained routes callbacks
// app.route('/students')
// .get((req,res)=>{
//     res.send('<h1>All student</h1>')
// })
// .post((req,res)=>{
//     res.send('<h1>Add New Student</h1>')
// })
// .put((req,res)=>{
//     res.send('<h1>update sucessful </h1>')
// })
// .delete((req,res)=>{
//     res.send('<h1>data has been delete sucessful </h1>')
// });



// app.route('/students')
// .all((req,res,next)=>{
//     console.log('Run for All Http methods');
//     next()
// })
// .get((req,res)=>{
//     console.log('GET Methods');
//     res.send('<h1>All student</h1>')
    
// })
// .post((req,res)=>{
//     console.log('POST Methods');
//     res.send('<h1>Add New Student</h1>')
// })
// .put((req,res)=>{
//     console.log('PUT Methods');
//     res.send('<h1>update sucessful </h1>')
// })
// .delete((req,res)=>{
//     console.log('DELETE Methods');
//     res.send('<h1>data has been delete sucessful </h1>')
// });


//messy code
app.get('/student/all',(req,res)=>{
      console.log('GET Methods');
    res.send('<h1>All student</h1>')
})
app.post('/student/create',(req,res)=>{
    console.log('POST Methods');
    res.send('<h1>Add New Student</h1>')
})
app.put('/student/update',(req,res)=>{
    console.log('PUT Methods');
    res.send('<h1>update sucessful </h1>')
})
app.delete('/student/delete',(req,res)=>{
    console.log('DELETE Methods');
    res.send('<h1>data has been delete sucessful </h1>')
})

//error path
app.all('*',(req,res)=>{
    res.send('<h2>Page Not Found<!!!/h2>')
}) 


app.listen(3000, () => {
    console.log("App listening running at http://localhost:3000")
})