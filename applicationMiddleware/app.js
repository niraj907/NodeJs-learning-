const express = require('express'); // importing module express
const app = express();// creating express of application
const web = require('./routes/web');
const student = require('./routes/student')
const path = require('path');
const myLogger = require('./middlewares/loggerMiddleware');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(),'public')));

//application level middleware
// app.use(myLogger)

// app.use('/about',myLogger)

//load routes
app.use('/',web)
app.use('/',student)


// All other routes
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
  });


app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
})

