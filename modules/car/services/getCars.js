const Car = require('../../../models/car');
const AdvancedResults = require('../../../utils/advancedResults');

const getCars = async (request) => {
  const advancedResults = new AdvancedResults(
    Car,
    request.query,
    {},
    {}
  ).filter(['color', 'brand']);

  const results = await advancedResults.execute();

  return results;
};

module.exports = getCars;
