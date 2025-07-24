import express from 'express';
import { getAllTestimonials } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/testimonials', getAllTestimonials); // GET /api/testimonials

export default router;
