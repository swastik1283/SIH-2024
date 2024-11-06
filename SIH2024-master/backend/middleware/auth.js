const jwt = require('jsonwebtoken');

exports.protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token || req.headers?.authorization?.replace('Bearer ', '');

    if (!token) {
      return next(new ErrorResponse('User not authorized to access this route', 401));
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      return next();
    } catch (err) {
      return next(new ErrorResponse('User not authorized to access this route', 401));
    }
  } catch (err) {
    next(new ErrorResponse('Something went wrong while validating user', 500));
  }
};
