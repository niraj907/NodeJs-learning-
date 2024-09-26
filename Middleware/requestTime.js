// imorting express 
const express = require('express')

// create an express application
const app = express() 

// middleware functions create
app.use(function (req, res, next) {
    req.requestTime = Date.now() // requestTime is a property of express
    next()
  }
  )

  // define a route
app.get('/', (req, res) => {
  let responseText = '<H1>Hello World!<br></H1> '
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

//start the Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});