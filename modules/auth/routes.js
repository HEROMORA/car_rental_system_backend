const { Router } = require('express');
const AuthController = require('./authController');

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/register', authController.register);

module.exports = authRouter;
