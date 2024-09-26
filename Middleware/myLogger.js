const express = require('express')
const app = express()

console.log('Starting')

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Good Night!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});