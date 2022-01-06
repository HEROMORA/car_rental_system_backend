const jwt = require('jsonwebtoken');

module.exports = (payload) => {
  const token = jwt.sign(
    {
      ...payload,
      role: 'customer',
    },
    process.env.JWT_TOKEN_SECRET
  );
  return token;
};
