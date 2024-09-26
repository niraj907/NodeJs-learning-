const mongoose = require('mongoose');

//method 1

// const connectDB = (DATABASE_URL) => {
//     return mongoose.connect(DATABASE_URL) 
//         .then(() => {
//             console.log('Connected Successfully');
//         })
//         .catch((error) => {
//             console.log('Connection error:', error);
//         });
// }

//method 2
const connectDB = async (DATABASE_URL) => {
    try {

        //await mongoose.connect(DATABASE_URL);
        const DB_OPTIONS = {
            user: 'nitesh',
            pass: 'nitesh123',
            dbName: 'schooldb',
            authSource: 'schooldb' 
        }

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Connected Successfully');
    } catch (error) {
        console.log('Connection error:', error);
    }
}

module.exports = connectDB;

