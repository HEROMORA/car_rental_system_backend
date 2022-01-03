const { Router } = require('express');

const carRouter = Router();

carRouter.get('/', (req, res, next) => {
  res.status(200).json({ text: 'hello, world!' });
});

module.exports = carRouter;
