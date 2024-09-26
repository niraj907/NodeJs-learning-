const express = require('express'); // importing module express
const app = express();// creating express of application
const PORT = process.env.PORT || 3000


// route parameters with regex
app.get('/', (req, res) => { 
  res.send('<h1>Hello World: 😄</h1>')
})

// app.get('/student/delete/:id([0-9]{2})', (req, res) => { 
// console.log(req.params)  
//     res.send(`<h2>Student Delete ${req.params.id}</h2>`)
// })


// app.get('/:type(post|article)/:id', (req, res) => {
//   console.log(req.params);
//   res.send('POST or Article');
// });


//app. param() method
// app. param('id',(req, res,next,id) => {
//   console.log(`Called only once ID: ${id}`)
//   next()
// })
// app.get('/user/:id', (req, res,next) => {
//   console.log('THis is a user id 1');
//   next()
// })
// app.get('/user/:id', (req, res) => {
//   console.log('THis is a user id 2');
//   res.send('Response OK')
// })




// array of route parameters using param() method

app.param(['id','page'],(req, res,next,value) => {
  console.log(`Called only once ID: ${value}`)
  next()
})
app.get('/user/:id/:page', (req, res,next) => {
  console.log('THis is a user id 1');
  next()
})
app.get('/user/:id/:page', (req, res) => {
  console.log('THis is a user id 2');
  res.send('Response OK')
})




app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
  });

app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`);
})