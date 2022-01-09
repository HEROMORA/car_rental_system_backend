const OfficeCar = require('../../../models/office_car');
const AppError = require('../../../utils/appError');

const creatOfficeCar = (officeCarData) => {
  const officeCar = OfficeCar.create({ ...officeCarData });

  if (!officeCar) {
    throw new AppError('Office car could not be created', 500);
  }

  return officeCar;
};

module.exports = creatOfficeCar;
