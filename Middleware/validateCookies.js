const express = require('express')
const cookieParser = require('cookie-parser')
const cookieValidator = require('./cookieValidator')

const app = express()

console.log('Starting')
async function validateCookies (req, res, next) {
  await cookieValidator(req.cookies)
  next()
}

app.use(cookieParser())

app.use(validateCookies)

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});