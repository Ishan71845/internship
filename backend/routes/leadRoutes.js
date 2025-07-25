// backend/routes/leadRoute.js
import express from 'express';
import { createLead, getLeads, deleteLead } from '../controllers/leadController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-lead', createLead);
router.get('/leads', protect, getLeads);
router.delete('/:id', protect, deleteLead);

export default router;
