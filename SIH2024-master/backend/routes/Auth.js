const express = require('express')
const router = express.Router();

const {protect} = require('../middleware/auth')
const {sendOTP,signUp,login,logOut,forgotPassword,resetPassword} = require('../controllers/Auth')

router.post('/sendOtp',sendOTP);
router.post('/signUp',signUp);
router.post('/login',login);
router.post('/logOut',protect,logOut);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);


module.exports=router;