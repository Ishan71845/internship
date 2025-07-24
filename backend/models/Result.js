import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  course: { type: String },
  year: { type: Number },
  rank: { type: String },
  image: { type: String }, // image URL or path
});

const Result = mongoose.model('Result', resultSchema);
export default Result;
