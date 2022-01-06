const Office = require('../../../models/office');

const getOffices = async () => {
  const offices = await Office.findAll();
  return offices;
};

module.exports = getOffices;
