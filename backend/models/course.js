import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  fee: String,
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
