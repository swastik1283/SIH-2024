const OTP = require('../models/OTP');
const User = require('../models/User');
const Profile = require('../models/Profile');
const otpGenerator = require('otp-generator');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const emailsender = require('../utils/emailsender')
const accountCreationTemplate = require('../mail/accountCreationTemplate')

exports.sendOTP = async (req, res) => {
    try {
        const { email } = req.body;
        
        if (await User.findOne({ email })) {
            return res.status(401).json({
                success: false,
                message: "User is already registered"
            });
        }

        const options = {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        };

        let otp;
        let existingOTP;

        do {
            otp = otpGenerator.generate(6, options);
            existingOTP = await OTP.findOne({ otp });
        } while (existingOTP);

        const otpObj = await OTP.create({ email, otp });

        res.status(200).json({
            success: true,
            data: otpObj.otp,
            message: 'OTP sent successfully',
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send otp. Please try again',
            error: error.message,
        });
    }
}

exports.signUp = async (req,res)=>
{
    try {
        
        let {firstName,lastName,email,password,otp} = req.body;

        // role = role.charAt(0).toUpperCase() + role.slice(1);

        if (!(firstName && lastName && email && password && otp)) {
            return res.status(403).json({
                success:false,
                message:"Some fields are missing"
            })
        }

        // Find the most recent OTP for the email
        const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

        if (recentOtp.length === 0 || otp !== recentOtp[0].otp) {
            // OTP not found or Database Otp not match with given otp for this email'
            return res.status(400).json({
                success: false,
                message:'OTP is not valid. Please try again'
            });
        }
        
        if (await User.findOne({ email })) {
            return res.status(400).json({
                success: false,
                message:'User already exist. Please sign in to continue'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const profile = await Profile.create({});

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profile: profile._id,
            avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}`,
        });
          
        await emailsender(email, `Your account created successfully for ${firstName} ${lastName}`, accountCreationTemplate(firstName + ' ' + lastName));

        sendTokenResponse(res, user, 201);

      
    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Failed to sign up. Please try again',
            error: error.message,
        });
        
    }
}
exports.login = async (req, res, next) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
    if (!email || !password) {
        return res.status(403).json({
            success:false,
            message:"Some fields are missing"
        })
    }
  
    const user = await User.findOne({ email }).select('+password');
  
    if (!user) {
        return res.status(400).json({
            success:false,
            message:"Invalid credentials"
        })
    }
  
    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({
            success:false,
            message:"Invalid credentials"
        })
    }
  
    sendTokenResponse(res, user, 200);

    } catch (err) {
        return res.status(500).json({
            success:false,
            message:"Login failed. Please try again"
        })
    }
  };
  
  
const sendTokenResponse = async(res, user, statusCode)=>
{
    const token = jwt.sign(
    {
        id: user._id,
        email: user.email,
        role: user.role,
    },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    );

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    res.cookie('token', token, options).status(statusCode).json({
        success: true,
        user,
        token,
    });
    
}

exports.logOut = async (req, res, next) => {
    try {
      res
        .cookie('token', 'none', {
          expires: new Date(Date.now() + 10 * 1000),
          httpOnly: true,
        })
        .status(200)
        .json({
          success: true,
          data: {},
        });
    } catch (err) {
      return res.status(500).json({
        sucsess:false,
        message:"Failed to log out. Please try again"
      })
    }
  };
    
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email not found. Please enter a valid email"
            });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(20).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // Update the user with the reset token and expiration time
        user = await User.findOneAndUpdate(
            { email },
            {
                resetPasswordToken: hashedToken,
                resetPasswordExpire: Date.now() + 10 * 60 * 1000, // 10 minutes
            },
            { new: true }
        );

        // Create the reset URL
        const resetUrl = `${process.env.FRONTEND_SITE}/reset-password?reset-token=${resetToken}`;

        // Send the email
        await emailsender(
            user.email,
            `Password reset for ${user.firstName} ${user.lastName}`,
            `You are receiving this email because you (or someone else) has requested the reset of your OUr Project account password. 
            Please click below to reset your password: \n\n ${resetUrl}`
        );

        return res.status(200).json({
            success: true,
            data:resetUrl,
            message: "Password reset email sent successfully."
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to process password reset request. Please try again.",
            error:error.message
        });
    }
};

exports.resetPassword = async (req, res) => {
    try {
      const { password, resetToken } = req.body;
      if (!(password && resetToken)) {
        return res.status(400).json({
          success: false,
          message: 'Some fields are missing',
        });
      }
  
      // Get hashed token
      const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  
      let user = await User.findOne({ resetPasswordToken });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'Invalid request',
        });
      }
  
      if (Date.now() > user.resetPasswordExpire) {
        return res.status(400).json({
          success: false,
          message: 'Token is expired. Please regenerate your token',
        });
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await User.findByIdAndUpdate(
        user._id,
        {
          password: hashedPassword,
          resetPasswordToken: undefined,
          resetPasswordExpire: undefined,
        },
        { new: true }
      );
  
      // Send email to user confirming password reset
      try {
        await emailsender(
          user.email,
          `Password has been reset successfully for ${user.firstName} ${user.lastName}`,
          `Your password has been reset successfully. Thanks for being with us.
          To visit our site: ${process.env.STUDY_NOTION_FRONTEND_SITE}`
        );
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: 'Failed to send reset successful email. Please try again',
        });
      }
  
      // Send response with token (assuming sendTokenResponse handles this)
      sendTokenResponse(res, user, 200);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Failed to reset password. Please try again',
      });
    }
  };
