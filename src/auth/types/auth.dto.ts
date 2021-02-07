import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CredentialsInterface } from './auth.interfaces';

export class LoginDto {
  // decorator for API Documentation!
  @ApiProperty({ example: 'test@gmail.com' })
  // validation decorator to check for an email field!
  @IsEmail()
  readonly email: string;

  // decorator for API Documentation!
  @ApiProperty({ example: 'pakistan' })
  // validation decorators for password field!
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  constructor(credentials: CredentialsInterface) {
    if (credentials) {
      this.email = credentials.email;
      this.password = credentials.password;
    }
  }
}

export class RegisterDto {
  // decorator for API Documentation!
  @ApiProperty({
    uniqueItems: true,
    example: 'test@gmail.com',
  })
  // validation decorator to check for an email field!
  @IsEmail()
  email: string;

  // decorator for API Documentation!
  @ApiProperty({
    minLength: 8,
    maxLength: 64,
    example: 'demodemo',
  })
  // validation decorators for password field!
  @IsString()
  @Length(8, 64)
  password: string;

  // decorator for API Documentation!
  @ApiProperty({
    format: 'Only Capital, Small English Letters And Spaces!',
    example: 'usama',
  })
  // validation decorator for firstName field!
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z ]+$/i, {
    message: () => {
      return 'firstName must contains only alphabets and spaces!';
    },
  })
  firstName: string;

  // decorator for API Documentation!
  @ApiProperty({
    format: 'Only Capital, Small English Letters And Spaces!',
    example: 'Tahir',
  })
  // validation decorator for firstName field!
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z ]+$/i, {
    message: () => {
      return 'lastName must contains only alphabets and spaces!';
    },
  })
  lastName: string;
}
