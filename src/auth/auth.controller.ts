import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginGuard } from './guards/login.guard';
import { RequestWithUser } from '../common/interface';
import { LoginDto, RegisterDto } from './types/auth.dto';
import { LoginInterface, RegisterInterface } from './types/auth.interfaces';
import { LoginResponse, RegisterResponse } from './types/auth.response';
import { AuthFailedWithInvalidCredentials, InternalServerErrorWithMessage } from '../common/responses';
import { HttpErrors } from '../common/errors';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LoginGuard)
  @Post('login')
  @ApiCreatedResponse({ description: 'OK', type: LoginResponse })
  @ApiUnauthorizedResponse({ description: HttpErrors.UNAUTHORIZED, type: AuthFailedWithInvalidCredentials })
  @ApiInternalServerErrorResponse({
    description: HttpErrors.INTERNAL_SERVER_ERROR,
    type: InternalServerErrorWithMessage,
  })
  async login(@Req() req: RequestWithUser, @Body() body: LoginDto): Promise<LoginInterface> {
    return this.authService.login(req.user);
  }

  @Post('register')
  @ApiCreatedResponse({ description: 'OK', type: RegisterResponse })
  @ApiInternalServerErrorResponse({
    description: HttpErrors.INTERNAL_SERVER_ERROR,
    type: InternalServerErrorWithMessage,
  })
  async register(@Body() body: RegisterDto): Promise<RegisterInterface> {
    return this.authService.register(body);
  }
}
