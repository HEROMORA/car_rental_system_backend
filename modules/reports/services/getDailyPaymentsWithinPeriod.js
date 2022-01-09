const Payment = require('../../../models/payment');
const { Op } = require('sequelize');

const getDailyPaymentsWithinPeriod = async (query) => {

      const payments = await Payment.findAll({

        where: {
            payment_date: {
                [Op.and]: [
                    {
                        [Op.gte]: query.start_date,
                      },
                   
                    { 
                        [Op.lte]: query.end_date
                    },
                  ],
            }
            
        },
      });

 return payments;
};

module.exports = getDailyPaymentsWithinPeriod;
