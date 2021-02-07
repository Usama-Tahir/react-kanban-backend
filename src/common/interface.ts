import { UserDocument } from '../schema/user.schema';
import { LeanDocument } from 'mongoose';

export interface RequestWithUser extends Request {
  user?: LeanDocument<UserDocument>;
}

export interface TokenInterface {
  token: string;
}
