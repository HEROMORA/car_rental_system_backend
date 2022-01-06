const AppError = require('../utils/appError');
const verifyAccessToken = require('../utils/verifyAccessToken');

module.exports = (req, res, next) => {
  const header = req.header('Authorization');
  if (header && header.startsWith('Bearer ')) {
    const token = header.split(' ')[1];
    const payload = verifyAccessToken(token);
    if (payload) {
      req.user = payload;
      return next();
    }
  }

  next(new AppError('Invalid Access Token', 401));
};
