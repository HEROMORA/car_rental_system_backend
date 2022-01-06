const res = require('express/lib/response');
const { signup } = require('./services');

class AuthController {
  async register(req, res, next) {
    const data = await signup(req.body);
    res.status(201).json(data);
  }

  async login(req, rest, next) {}
}

module.exports = AuthController;
