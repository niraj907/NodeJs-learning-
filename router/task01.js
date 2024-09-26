const express = require('express'); // importing module express
const students = require('./routes/student')
const teachers = require('./routes/teacher')

const app = express();// creating express of application
app.get('/', (req, res) => { 
  res.send('<h1>Hello World!</h1>')
})


// load router modules
app.use('/student',students)
app.use('/teacher',teachers)


// All other routes
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
  });

  
app.listen(3000, () => {
    console.log("App listening running at http://localhost:3000")
})