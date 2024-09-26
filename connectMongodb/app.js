const express = require('express'); // importing module express
const app = express(); // creating an express application
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connectdb'); // Importing the connectDB function

// const DATABASE_URL = "mongodb://nitesh:nitesh123@localhost:27017/schooldb?authSource=schooldb"
const DATABASE_URL = "mongodb://localhost:27017"

// mongoose.connect("mongodb://localhost:27017/schooldb") 
//     .then(() => {
//         console.log('Connected Successfully');
//     })
//     .catch((error) => {
//         console.log('Connection error:', error);
//     });

// database connection
connectDB(DATABASE_URL)

app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`);
});
