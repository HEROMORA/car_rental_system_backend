//  Function Takes array of roles and authorizes the users

const AppError = require('../utils/appError');

//  spcified in the roles array only
module.exports = (roles) => (req, res, next) => {
  for (let i = 0; i < roles.length; i++) {
    if (roles[i] === req.user.role) {
      return next();
    }
  }

  next(new AppError('Unauthorized access', 403));
};
