import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { User, UserDocument } from '../schema/user.schema';
import * as bcrypt from 'bcrypt';
import { LoginDto, RegisterDto } from './types/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginInterface, RegisterInterface } from './types/auth.interfaces';
import { ErrorMessages, ResponseMessages } from '../common/errors';
import { LeanDocument, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(credentials: LoginDto): Promise<LeanDocument<UserDocument> | undefined> {
    const user = await this.userModel.findOne({ email: credentials.email }).lean();
    if (!user) throw new NotFoundException(ErrorMessages.EMAIL_DOES_NOT_EXISTS);
    if (user.password && bcrypt.compareSync(credentials.password, user.password)) {
      return user;
    }
    return undefined;
  }

  async login(user: LeanDocument<UserDocument>): Promise<LoginInterface> {
    const { password, ...result } = user;
    return {
      accessToken: this.jwtService.sign(result, {
        subject: user?._id?.toString(),
        expiresIn: '7d',
      }),
    };
  }

  async register(data: RegisterDto): Promise<RegisterInterface> {
    const user = await this.userModel.findOne({ email: data.email }).lean();
    if (user) {
      throw new ConflictException(ErrorMessages.EMAIL_ALREADY_EXISTS);
    }
    try {
      data.password = bcrypt.hashSync(data.password, 10);
      const newUser = await new this.userModel(data);
      await newUser.save();
    } catch (e: any) {
      console.warn(e);
      throw new InternalServerErrorException(ErrorMessages.INTERNAL_SERVER_ERROR);
    }
    return {
      message: ResponseMessages.REGISTER_SUCCESS,
    };
  }
}
