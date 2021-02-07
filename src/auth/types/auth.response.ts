import { ApiProperty } from '@nestjs/swagger';
import { ResponseMessages } from '../../common/errors';

export class LoginResponse {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZmY2M5OTBhMDVjNzFh' +
      'NzhiYjIyMDYiLCJyb2xlIjoib3duZXIiLCJpc0VtYWlsVmVyaWZpZWQiOnRydWUsImlzQW' +
      'N0aXZlIjp0cnVlLCJhdmF0YXIiOiIiLCJsYXN0TmFtZSI6IkFobWFkIiwiZmlyc3ROYW1' +
      'lIjoiQWZ6YWFsIiwiZW1haWwiOiJhZnphYWxhaG1hZDg2NkBnbWFpbC5jb20iLCJmb29k' +
      'Q2hhaW4iOiI1ZmZmY2M5OTBhMDVjNzFhNzhiYjIyMDUiLCJjcmVhdGVkQXQiOiIyMDIxLT' +
      'AxLTE0VDA0OjQ2OjE3LjY0MFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAxLTE0VDA1OjI2OjA4' +
      'LjE2MVoiLCJfX3YiOjAsImlhdCI6MTYxMDYwMzE3NywiZXhwIjoxNjEwNjAzMjM3LCJpc3M' +
      'iOiJ2aXNlbnRpIiwic3ViIjoiNWZmZmNjOTkwYTA1YzcxYTc4YmIyMjA2In0.vODExUEkMa' +
      'cOxNJWK4F624_q4hNO-9OFxEVHQuRrctU',
  })
  accessToken: string;
}

export class RegisterResponse {
  @ApiProperty({
    example: ResponseMessages.REGISTER_SUCCESS,
  })
  message: string;
}
