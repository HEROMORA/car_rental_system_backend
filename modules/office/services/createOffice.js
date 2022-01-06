const Office = require('../../../models/office');

const createOffice = async (body) => {
  const office = await Office.create(body);

  return office;
};

module.exports = createOffice;
