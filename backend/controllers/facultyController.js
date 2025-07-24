import Faculty from '../models/Faculty.js';

export const getAllFaculty = async (req, res) => {
  try {
    const facultyList = await Faculty.find();
    res.json(facultyList);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch faculty', error: error.message });
  }
};
