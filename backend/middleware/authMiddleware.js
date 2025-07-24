import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);

    // Dummy check: you can later fetch actual admin from DB if needed
    if (decoded && decoded.role === 'admin') {
      req.admin = decoded;
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Invalid credentials' });
    }
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};
