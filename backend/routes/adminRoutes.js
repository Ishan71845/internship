import express from 'express';
import { loginAdmin, getLeads } from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/leads', protect, getLeads);

export default router;
