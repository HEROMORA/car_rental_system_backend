const Payment = require('../../../models/payment');
const { Op } = require('sequelize');
const moment = require('moment');

const getDailyPaymentsWithinPeriod = async (query) => {

    const nowDate = moment().utc('+2').toISOString();
    console.log(nowDate);

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
