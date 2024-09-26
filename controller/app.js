const express = require('express'); // importing module express
const students = require('./routes/student');
const app = express();// creating express of application
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => { 
  res.send('<h1>Sucessful Connected!</h1>')
  })

// load router modules
app.use('/student',students)


// All other routes
app.all('*', (req, res) => {
    console.log('Page not found');
    res.status(404).send('<h1>Page Not Found</h1>');
  });

app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`);
})