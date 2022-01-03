// import { MulterError } from 'multer';
// import {
//   DatabaseError,
//   ForeignKeyConstraintError,
//   ValidationError,
// } from 'sequelize';
import AppError from '../utils/appError';

const error = (err, req, res, next) => {
  let statusCode = 500;
  let error = err;
  let errorArr = null;

  // Handling syntax error in the body of request
  if (err instanceof SyntaxError) {
    error = new AppError(err.message, 400);
  }

//   // If the error is validation error from DB
//   else if (error instanceof ValidationError) {
//     const errors = error.errors.map((e) => {
//       return {
//         path: e.path,
//         message: e.message,
//       };
//     });
//     error = new AppError('Validation Error', 422, errors);
//   }

//   // If the error is validation error from DB
//   else if (error instanceof DatabaseError) {
//     error = new AppError(
//       error['fields']
//         ? `Invalid value for the field ${error['fields'][0]}`
//         : `Invalid value ${error.message}`,
//       422
//     );
//   } else if (error instanceof ForeignKeyConstraintError) {
//     error = new AppError(`Invalid value for field "${error.fields[0]}"`, 422);
//   } else if (error instanceof MulterError) {
//     if (error.code === 'LIMIT_UNEXPECTED_FILE') {
//       error = new AppError(`Invalid number of uploads`, 400);
//     }
//   }

  // Setting the correct status code
  if (error instanceof AppError) {
    statusCode = error.statusCode;
    errorArr = error.errorArr;
  }

  // Log Server error to fix them later in the logs
  if (statusCode === 500) {
    console.log(error);
    error = new AppError('Something gone wrong with out server', 500);
  }

  // Setting error response
  const errorResponse = {
    code: statusCode,
    error: error.message,
  };

  // Add errors Array if exists
  if (errorArr !== null) {
    errorResponse['errors'] = errorArr;
  }

  res.status(statusCode).json(errorResponse);
};

export default error;
