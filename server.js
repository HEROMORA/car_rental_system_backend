const express = require('express');

const error = require('./middleware/error');
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

    const v1Router = this.getAPIV1Router();
    this.app.use('/api/v1', v1Router);

    // If the route is not found
    this.app.use('*', (req, res, next) => {
      next(new AppError('Route not found.', 404));
    });

    // Handle Application errors
    this.app.use(error);
  }

  getAPIV1Router() {

    const router = express.Router();
    router.use('/cars', carRouter);
    
    return router;
  }
}

const server = new Server();
module.exports = server;
