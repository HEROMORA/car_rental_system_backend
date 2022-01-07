const OfficeCar = require('../../../models/office_car');
const AppError = require('../../../utils/appError');

const getOfficeCarById = async (officeCarId) => {
  const officeCar = await OfficeCar.findAll({
    where: {
      office_id: officeCarId,
    },
  });

  if (!officeCar) {
    throw new AppError('Office car could not be found', 404);
  }

  return officeCar;
};

module.exports = getOfficeCarById;
