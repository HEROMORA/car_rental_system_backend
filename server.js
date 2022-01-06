const express = require('express');
const sequelize = require('./instances/sequelize');

const error = require('./middleware/error');
const carRouter = require('./modules/car/routes');
const officeRouter = require('./modules/office/routes');
const carDescriptionRouter = require('./modules/car_description/routes');
const AppError = require('./utils/appError');

class Server {
  constructor() {
    this.app = express();

    this.configMiddleware();
    this.mountRoutes();
    this.initializeDatabase();
  }

  // apply application middlewares
  configMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Mount the routers to the app instance
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

  // Returns the router of v1
  getAPIV1Router() {
    const router = express.Router();
    router.use('/cars', carRouter);
    router.use('/offices', officeRouter);
    router.use('/car-descriptions', carDescriptionRouter);

    return router;
  }

  async initializeDatabase() {
    try {
      await sequelize.authenticate();
      await sequelize.sync();

      console.log(
        'Connection has been established successfully.'.blue.underline
      );
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

const server = new Server();
module.exports = server;
