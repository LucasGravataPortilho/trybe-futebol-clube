import { sign } from 'jsonwebtoken';

const secretkey = process.env.JWT_SECRET || 'jwt_secret';

const generateToken = (id: number) => {
  const data = {
    id,
  };

  const token = sign(
    data,
    secretkey,
    {
      expiresIn: '2d',
      algorithm: 'HS256',
    },
  );

  return token;
};

export default generateToken;
