const mongoose = require('mongoose');
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'studentdb',
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Connected Successfully');
    } catch (error) {
        console.log('Connection error:', error);
    }
}

module.exports = connectDB;
