module.exports = (payload) => {
  const token = jwt.sign(
    {
      ...payload,
      role: 'admin',
    },
    process.env.JWT_TOKEN_ADMIN_SECRET
  );
  return token;
};
