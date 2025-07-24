import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String },
  image: { type: String }, // image URL or path
  bio: { type: String },
});

const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;
