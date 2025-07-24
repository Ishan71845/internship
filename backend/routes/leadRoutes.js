import express from 'express';
import { createLead, getLeads, deleteLead } from '../controllers/leadController.js';
import { protect } from '../middleware/authMiddleware.js'; // Correct path

const router = express.Router();

// Public route
router.post('/create-lead', createLead);

// Protected routes (admin-only)
router.get('/leads', protect, getLeads);
router.delete('/:id', protect, deleteLead);

export default router;
