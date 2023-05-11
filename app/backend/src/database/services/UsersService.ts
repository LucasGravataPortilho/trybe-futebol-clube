import { compare } from 'bcryptjs';
import { generateToken } from '../auth';
import HttpException from '../httpException';
import UserModel from '../models/UserModel';

export type Login = {
  email: string;
  password: string;
};

class UsersService {
  public static async login({ email, password }: Login): Promise<string> {
    const user = await UserModel.findOne({
      where: { email },
    });

    // if (!user) {
    //   throw new HttpException(401, 'Invalid email or password');
    // }

    // const comparePasswords = await compare(password, user.password);
    // if (!comparePasswords) {
    //   throw new HttpException(401, 'Invalid email or password');
    // }

    return generateToken(user.id);
  }
}

export default UsersService;
