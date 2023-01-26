const { STATUS_CODES } = require("../constants/AppError");
class AppError extends Errors {
  constructor(
    name,
    statusCode,
    description,
    isOperational,
    errorStack,
    loggingErrorResponse
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
