// utils/generateToken.js
import jwt from 'jsonwebtoken';

const generateToken = (email) => {
  return jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
