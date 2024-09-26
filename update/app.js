const express = require('express'); // Importing module express
const app = express(); // Creating express application
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connectdb'); // Importing the connectDB function
const {updateDocById , upadateOneDoc , upadateOneDocByAge , upadateManyDoc } = require('./modals/Student');

// Import the functions using object destructuring

const DATABASE_URL = "mongodb://localhost:27017";

//updateDocById('66b4ee4346fc1da3cf0f8706');
//upadateOneDoc('66b4ee4346fc1da3cf0f8706')
// upadateOneDocByAge(30)
upadateManyDoc(100)

// Database connection
connectDB(DATABASE_URL);
app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
});
