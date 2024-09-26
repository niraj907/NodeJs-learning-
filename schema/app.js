const express = require('express'); // importing module express
const app = express(); // creating an express application
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connectdb'); // Importing the connectDB function
const createStd = require('./models/Student');

const DATABASE_URL = "mongodb://localhost:27017"

console.log('Starting 1')

// database connection
connectDB(DATABASE_URL)

console.log('Starting 2')

// create and save documents
createStd()

//createStd('Chandra',55,8666.45,['sleeping','newpaper'],true,[{value:'This is a good human being'}])

console.log('Starting 3')

app.listen(PORT, () => {
  console.log(`App listening running at http://localhost:${PORT}`);
});
