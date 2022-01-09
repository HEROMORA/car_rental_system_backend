const Reservation = require('../../../models/reservation');
const Pickup = require('../../../models/pickup');
const { Op } = require("sequelize");


//tried to get the now date like that
//TODO needs to be tested

const getReservationTimes = async (id) => {
    var today = new Date();
    var nowDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const reservationTimes = await Reservation.findAll({  //not sure with the sequelize query
        // attributes: 
        //     ['pickup_date','return_date'],
            include: [{
                model: Pickup,
                where: {
                    pickup_date: {
                        [Op.gt]: nowDate
                    }
                },
                attributes: ['pickup_date'],
            }],
            where:  {
                car_id: id
            }
            
    });

    if (!reservationTimes) {
        throw new AppError(`No reservation times for a car with id ${id} is found`, 404);
      }
    return reservationTimes;
  };

  
  
  module.exports = getReservationTimes;
  
