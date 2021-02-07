export enum HttpErrors {
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  UNAUTHORIZED = 'Unauthorized',
}

export enum ErrorMessages {
  INVALID_CREDENTIALS = 'Invalid Credentials',
  SESSION_EXPIRED = 'Session Expired! Please login again!',
  INTERNAL_SERVER_ERROR = 'Please try again later!',
  EMAIL_ALREADY_EXISTS = 'An account with given email already exists!',
  EMAIL_DOES_NOT_EXISTS = 'An account with given email does not exist!',
  CARD_DOES_NOT_EXIST = 'The card you are trying to update does not exist or does not belong to you',
}

export const enum ResponseMessages {
  REGISTER_SUCCESS = 'Your account has been created. Please login to continue',
}
