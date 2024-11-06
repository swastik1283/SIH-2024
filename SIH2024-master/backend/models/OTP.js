const mongoose = require('mongoose');
const clgDev = require('../utils/clgDev');
const emailOtpTemplate = require('../mail/emailOtpTemplate')
const emailsender = require('../utils/emailsender')

const OTPSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '10m', // The document will automatically deleted after 10 minutes of its creation time
  },
});

const sendOtpEmail = async (toEmail, otp) => {
  try {
    const mailResponse = await emailsender(toEmail, 'Verification Email from Our Project', emailOtpTemplate(otp));
  } catch (err) {
    clgDev(`Error occurred while sending otp : ${err.message}`);
    throw err;
  }
};

OTPSchema.post('save', async function (doc)
{
  // Only send an email when a new document is created
  // this.isNew in pre middleware
  await sendOtpEmail(this.email, this.otp);

})
module.exports = mongoose.model("OTP",OTPSchema)