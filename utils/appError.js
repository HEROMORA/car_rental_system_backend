class AppError extends Error {
  constructor(message, statusCode, errorArr) {
    super(message);
    this.statusCode = statusCode;
    this.errorArr = errorArr;
  }
}

module.exports = AppError;
