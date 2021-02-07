import { ApiProperty } from '@nestjs/swagger';
import { IsJWT } from 'class-validator';
import { TokenInterface } from './interface';

export class TokenDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZmY2M5OTBhMDVjNzF' +
      'hNzhiYjIyMDYiLCJyb2xlIjoib3duZXIiLCJpc0VtYWlsVmVyaWZpZWQiOmZhbHNlLCJ' +
      'pc0FjdGl2ZSI6dHJ1ZSwiYXZhdGFyIjoiIiwibGFzdE5hbWUiOiJBaG1hZCIsImZpcnN' +
      '0TmFtZSI6IkFmemFhbCIsImVtYWlsIjoiYWZ6YWFsYWhtYWQ4NjZAZ21haWwuY29tIiw' +
      'iZm9vZENoYWluIjoiNWZmZmNjOTkwYTA1YzcxYTc4YmIyMjA1IiwiY3JlYXRlZEF0Ijoi' +
      'MjAyMS0wMS0xNFQwNDo0NjoxNy42NDBaIiwidXBkYXRlZEF0IjoiMjAyMS0wMS0xNFQwN' +
      'Do0NjoxNy42NDBaIiwiX192IjowLCJpYXQiOjE2MTA2MDA0OTgsImV4cCI6MTYxMDY4N' +
      'jg5OCwiaXNzIjoidmlzZW50aSIsInN1YiI6IjVmZmZjYzk5MGEwNWM3MWE3OGJiMjIwN' +
      'iJ9.2wyjEadf9s7yeeXZzyZMun_mBpwCMxKWNjursGI-AzE',
  })
  @IsJWT()
  token: string;

  constructor(data?: TokenInterface) {
    if (data) {
      this.token = data.token;
    }
  }
}
