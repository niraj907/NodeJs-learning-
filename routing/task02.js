const express = require('express');
const app = express();

// routes 
app.get('/',(req,res)=>{
    res.send('<h1>Get Method!</h1>')
})


// app.all('/all',(req,res)=>{
//     res.send('<h1>All Method!</h1>')
// })



// string pattern path
// app.get('/ab?cd',(req,res)=>{
//     res.send('<h1>This route path will match acd and abcd</h1>')
// })



//regular expressions path
// app.get(/a/,(req,res)=>{
//     res.send('<h1>This is a</h1>')
// })



// more than one callback
// app.get('/exam', 
//     (req, res, next) => {
//       console.log('First callback');
//       next(); // Pass control to the next callback function
//     }, 
//     (req, res) => {
//       console.log('second callback');
//       res.send('<h2>More than one callback</h2>'); // Send an HTML response
//     }
//   );
  

//array of callback functions
// const cb1 = (req,res,next)=>{
//     console.log('first callback');
//   next();  
// }
// const cb2 = (req,res,next)=>{
//     console.log('second callback');
//     next();
// }
// const cb3 = (req,res)=>{
//     console.log('third callback');
//     res.send('<h2>array of callback functions</h2>'); 
// }

// app.get('/exam1',[cb1,cb2,cb3])



//combination of Independent function and array of functions
//const cb1 = (req,res,next)=>{
//     console.log('first callback');
//   next();  
// }
// const cb2 = (req,res,next)=>{
//     console.log('second callback');
//     next();
// }

// app.get('/exam2',[cb1,cb2],(req,res,next)=>{
// console.log('third callback');
// next();
// },(req,res)=>{
//     console.log('fourth callback');
//          res.send('<h2>combination of Independent function and array of functions</h2>');
// });



// error path
// app.all('*',(req,res)=>{
//     res.send('<h2>Page Not Found<!!!/h2>')
// }) 



app.listen(3000, () => {
    console.log("App listening running at http://localhost:3000")
})



