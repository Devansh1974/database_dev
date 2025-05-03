import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  vetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default mongoose.model('Appointment', appointmentSchema);
