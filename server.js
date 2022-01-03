const express = require('express');
const carRouter = require('./modules/car/routes');
const AppError = require('./utils/appError');

class Server {
  constructor() {
    this.app = express();
    this.configMiddleware();
    this.mountRoutes();
  }

  configMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  mountRoutes() {
    this.app.use('/car', carRouter);

    // If the route is not found
    this.app.use('*', (req, res) => {
      res.status(404).json(AppError('API_NOT_FOUND', 404));
    });

    // Handle Application errors
    this.app.use(error);
  }
}

const server = new Server();
module.exports = server;
