const sequelize = require('../../../instances/sequelize');
const Car = require('../../../models/car');
const OfficeCar = require('../../../models/office_car');

const createOfficeCarFromDescription = async (body) => {
  const t = await sequelize.transaction();
  try {
    const car = await Car.create(
      {
        plate_id: body.plate_id,
        car_description_id: body.car_description_id,
      },
      { transaction: t }
    );

    const officeCar = await OfficeCar.create(
      {
        car_id: car.car_id,
        office_id: body.office_id,
      },
      { transaction: t }
    );

    await t.commit();

    return {
      car,
      officeCar,
    };
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

module.exports = createOfficeCarFromDescription;
