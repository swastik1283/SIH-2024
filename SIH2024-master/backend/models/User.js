const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Enter a valid email'],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'],
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        select: false,
    },
    // role: {
    //     type: String,
    //     enum: ['Private', 'Seller', 'Company'],
    //     required: true,
    // },
    avatar: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
      
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
    // reviews: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'Review',
    //     },
    // ],
    token: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User',userSchema)