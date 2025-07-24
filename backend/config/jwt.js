import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export const generateToken = (admin) => {
  return jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
