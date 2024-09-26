const express = require('express'); // importing module express
const app = express();// creating express of application
const web = require('./routes/web');
const PORT = process.env.PORT || 3000;

app.use('/',web)

app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
})