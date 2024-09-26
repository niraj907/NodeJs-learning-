const express = require('express'); // Importing module express
const app = express(); // Creating express application
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connectdb'); // Importing the connectDB function
const {deleteDocById , deleteOneDoc } = require('./modals/Student');

// Import the functions using object destructuring

const DATABASE_URL = "mongodb://localhost:27017";



// Database connection
connectDB(DATABASE_URL);

//deleteDocById('66b4ee4346fc1da3cf0f8706')
deleteOneDoc('76b4ee4346fc1da3cf0f8706')

app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
});
