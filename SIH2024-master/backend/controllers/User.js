const User = require('../models/User');
const Profile = require('../models/Profile');
const clgDev = require('../utils/clgDev');

exports.currentUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).populate('profile').exec();
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (err) {
      res.status(500).json({
        message:'Failed to get current user, please try again',
        success: false,
        error: error.message,
      })
    }
};