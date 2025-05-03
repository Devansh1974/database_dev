import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  role: {
    type: String,
    enum: ['petOwner', 'vet'],
    required: true
  }
});

export default mongoose.model('User', userSchema);
