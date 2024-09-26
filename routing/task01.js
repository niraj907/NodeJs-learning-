
const express = require('express'); // importing module express
const app = express();// creating express of application
app.get('/', (req, res) => { 
  res.send('<h1>Hello World!</h1>')
})

app.listen(3000, () => {
    console.log("App listening running at http://localhost:3000")
})