require('dotenv').config();
console.log('MongoDB Connection String:',process.env.MONGO_CONN);
const mongoose = require('mongoose'); // Correct spelling
const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});