const mongoose = require('mongoose');
const clgDev = require('../utils/clgDev');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({path:'./config.env'})

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MongoUrl)
        clgDev("MongoDB connected successfully".cyan.underline.bold);
    } catch (error) {
        clgDev(`${err.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB;