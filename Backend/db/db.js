const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err.message));
}

module.exports = connectToDb;