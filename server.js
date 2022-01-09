const express = require('express');
const sequelize = require('./instances/sequelize');

const error = require('./middleware/error');
const authRouter = require('./modules/auth/routes');
const carRouter = require('./modules/car/routes');
const officeRouter = require('./modules/office/routes');
const reservationRouter = require('./modules/reservation/routes');
const carDescriptionRouter = require('./modules/car_description/routes');
const carPriceRouter = require('./modules/car_price/routes');
const carStatusRouter = require('./modules/car_status/routes');
const officeCarRouter = require('./modules/office_car/routes');
const AppError = require('./utils/appError');
const customerRouter = require('./modules/customer/routes');
const searchReservationRouter = require('./modules/reservation_search/routes');
const reportsRouter = require('./modules/reports/routes');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();

    this.configMiddleware();
    this.mountRoutes();
    this.initializeDatabase();
  }

  // apply application middlewares
  configMiddleware() {
    this.app.use(cors());
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
    router.use('/car-prices', carPriceRouter);
    router.use('/car-statuses', carStatusRouter);
    router.use('/office-cars', officeCarRouter);
    router.use('/auth', authRouter);
    router.use('/reservations', reservationRouter);
    router.use('/customers', customerRouter);
    router.use('/search-reservations', searchReservationRouter);
    router.use('/reports', reportsRouter);

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
