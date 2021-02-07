import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ErrorMessages, HttpErrors } from './errors';

export class InternalServerError {
  @ApiProperty({ example: HttpStatus.INTERNAL_SERVER_ERROR })
  statusCode: number;

  @ApiProperty({ example: HttpErrors.INTERNAL_SERVER_ERROR })
  error: string;
}
export class InternalServerErrorWithMessage extends InternalServerError {
  @ApiPropertyOptional({ example: ErrorMessages.INTERNAL_SERVER_ERROR })
  message: string;
}
export class UnauthorizedResponse {
  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  statusCode: number;

  @ApiProperty({ example: HttpErrors.UNAUTHORIZED })
  error: string;
}

export class AuthFailedWithInvalidCredentials extends UnauthorizedResponse {
  @ApiProperty({ example: ErrorMessages.INVALID_CREDENTIALS })
  message: string;
}

export class GenericUnauthorizedResponse extends UnauthorizedResponse {
  @ApiProperty({ example: ErrorMessages.SESSION_EXPIRED })
  message: string;
}
