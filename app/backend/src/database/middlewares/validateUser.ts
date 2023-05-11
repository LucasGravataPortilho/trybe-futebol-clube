import HttpException from '../httpException';
import { Login } from '../services/UsersService';

const validateUser = ({ email, password }: Login): void => {
  const textEmail = /\S+@\S+\.\S+/;
  const passLimit = 6;

  if (!textEmail.test(email) || password.length < passLimit) {
    throw new HttpException(401, 'Invalid email or password');
  }
};

export default validateUser;
