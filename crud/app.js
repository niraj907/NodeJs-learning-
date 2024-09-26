const express = require('express'); // Importing module express
const app = express(); // Creating express application
const path = require('path'); // Importing the path module
const web = require('./routes/categoryRoutes');
const connectDB = require('./db/connectdb'); // Importing the connectDB function
const DATABASE_URL = "mongodb://localhost:27017";
const PORT = process.env.PORT || 4000;

// Database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }));


// Static files
app.use('/category',express.static(path.join(process.cwd(), "public"))) // Using join from path module
app.use('/category/edit',express.static(path.join(process.cwd(), "public"))) // Using join from path module

// set up template engine to use
app.set('view engine', 'ejs')

// load routes
app.use('/category',web)

app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
});
