import { BadRequestException, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from '../types/auth.dto';
import { validate } from 'class-validator';
import { CredentialsInterface } from '../types/auth.interfaces';
import { flatMap } from 'lodash';

@Injectable()
export class LoginGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const credentials: CredentialsInterface = new LoginDto(req.body);
    const errors = await validate(credentials);
    if (errors.length)
      throw new BadRequestException(flatMap(errors?.map((error) => Object.values(error?.constraints))));
    return !!(await super.canActivate(context));
  }
}
