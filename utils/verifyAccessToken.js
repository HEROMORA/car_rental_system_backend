const { verify } = require('jsonwebtoken');

module.exports = (token) => {
  try {
    const payload = verify(token, process.env.JWT_TOKEN_SECRET);
    return payload;
  } catch (err) {
    return null;
  }
};
