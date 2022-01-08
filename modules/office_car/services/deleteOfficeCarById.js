const OfficeCar = require('../../../models/office_car');
const AppError = require('../../../utils/appError');

const deleteOfficeCarById = async (carid) => {
  const officeCar = await OfficeCar.destroy({
      where: {
          car_id: carid 
      }
  });

  if (!officeCar) {
    throw new AppError('Office car could not be found', 404);
  }

  return officeCar;
};

module.exports = deleteOfficeCarById;
