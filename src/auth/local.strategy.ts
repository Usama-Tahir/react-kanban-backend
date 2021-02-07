import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ErrorMessages } from '../common/errors';
import { UserDocument } from '../schema/user.schema';
import { LeanDocument } from 'mongoose';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<LeanDocument<UserDocument>> {
    const user = await this.authService.validateUser({ email, password });
    if (!user) throw new UnauthorizedException(ErrorMessages.INVALID_CREDENTIALS);
    return user;
  }
}
