
const express = require('express'); // importing module express
const app = express();// creating express of application
const PORT = process.env.PORT || 4000;
const web = require('./routes/web');
const path = require('path');

app.use(express.static(path.join(process.cwd(),'public')));
// app.set('views','./views')

// set up template engine to use
app.set('view engine', 'ejs')
app.use('/',web)
app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
})