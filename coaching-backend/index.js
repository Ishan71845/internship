import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import resultRoutes from './routes/resultRoutes.js';
import leadRoutes from './routes/leadRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/leads', leadRoutes);

// Debug output for env
console.log("🔍 MONGODB_URI =", process.env.MONGODB_URI);
console.log("🔍 JWT_SECRET =", process.env.JWT_SECRET);
console.log("🔍 CLOUDINARY_CLOUD_NAME =", process.env.CLOUDINARY_CLOUD_NAME);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`✅ Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error('❌ Mongo connection error:', err);
    process.exit(1);
  });
