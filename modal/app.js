const express = require('express'); // Importing module express
const app = express(); // Creating express application
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connectdb'); // Importing the connectDB function

// Import the functions using object destructuring
const { allDocuments, allDocumentsSpecificField , getSingleDoc , 
    getSingleDocSpecificField , getDocByField , getDocByFieldSpecific,
    getLimitedDoc , getSkipDoc , getCount , getSortDoc , mixDoc,
    compareOperatorDoc ,logDoc

} = require('./modals/Student');

const DATABASE_URL = "mongodb://localhost:27017";

// Database connection
connectDB(DATABASE_URL);

// Call the functions
// allDocuments();
// allDocumentsSpecificField();
//getSingleDoc()
//getSingleDocSpecificField()
//getDocByField()
//getDocByFieldSpecific()
//getLimitedDoc()
//getSkipDoc()
//getCount()
//getSortDoc()
//mixDoc()
//compareOperatorDoc()
logDoc()


app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
});
