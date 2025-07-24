import Result from '../models/Result.js';

export const getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch results', error: error.message });
  }
};
