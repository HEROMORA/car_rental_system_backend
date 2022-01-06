const Office = require('../../../models/office');
const AppError = require('../../../utils/appError');

const getOfficeById = async (id) => {
  const office = await Office.findByPk(id);

  if (!office) {
    throw new AppError(`No office with is ${id} is found`, 404);
  }

  return office;
};

module.exports = getOfficeById;
