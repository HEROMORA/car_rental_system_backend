const { signup, login } = require('./services');

class AuthController {
  async register(req, res, next) {
    const data = await signup(req.body);
    res.status(201).json(data);
  }

  async login(req, res, next) {
    const data = await login(req.body);
    res.status(200).json(data);
  }
}

module.exports = AuthController;
