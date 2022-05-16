const mongoose = require('mongoose');
require('dotenv').config({path:'./config.env'});
const MONGODB_URL = process.env.MONGODB_URL
const _db_connection = async ()=>{
    await mongoose.connect(MONGODB_URL, error => {
        if (error) throw error;
        console.log('MongoDB Connected...')
    })
}

module.exports = _db_connection;