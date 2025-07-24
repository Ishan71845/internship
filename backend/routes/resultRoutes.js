import express from 'express';
import { getAllResults } from '../controllers/resultController.js';

const router = express.Router();

router.get('/results', getAllResults); // GET /api/results

export default router;
