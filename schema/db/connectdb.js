const mongoose = require('mongoose');

console.log('Starting 4')


const connectDB = async (DATABASE_URL) => {
    try {
        console.log('Starting 5')

        //await mongoose.connect(DATABASE_URL);
        const DB_OPTIONS = {
            dbName: 'schooldb',
        }

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Connected Successfully');
    } catch (error) {
        console.log('Starting 6')

        console.log('Connection error:', error);
    }
}

module.exports = connectDB;
