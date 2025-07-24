import express from 'express';
import { getAllFaculty } from '../controllers/facultyController.js';

const router = express.Router();

router.get('/faculty', getAllFaculty); // GET /api/faculty

export default router;
