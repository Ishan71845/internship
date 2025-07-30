import express from 'express';
import { loginAdmin, getLeads } from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

//  POST /api/admin/login
router.post('/login', loginAdmin);

//  GET /api/admin/leads (Protected)
router.get('/leads', protect, getLeads);

export default router;
