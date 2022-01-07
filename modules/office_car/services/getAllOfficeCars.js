const OfficeCar = require('../../../models/office_car');
const AppError = require('../../../utils/appError');

const getAllOfficeCars = async () => {
  const officeCars = await OfficeCar.findAll();

  if (!officeCars) {
    throw new AppError('Office cars could not be found', 404);
  }

  return officeCars;
};

module.exports = getAllOfficeCars;
