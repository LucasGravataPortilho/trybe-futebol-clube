import { sign, verify, SignOptions } from 'jsonwebtoken';

const secretkey = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const generateToken = (id: number) => {
  const data = {
    id,
  };

  const token = sign(data, secretkey, jwtConfig);

  return token;
};

const validateToken = (token: string) => verify(token, secretkey);

export { generateToken, validateToken };
