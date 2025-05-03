import Appointment from '../models/Appointment.js';
import User from '../models/User.js';

export const createAppointment = async (req, res) => {
  try {
    const { petName, date, vetId, ownerId } = req.body;
    if (!petName || !date || !vetId || !ownerId) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const vet = await User.findById(vetId);
    const owner = await User.findById(ownerId);

    if (!vet || !owner || vet.role !== 'vet' || owner.role !== 'petOwner') {
      return res.status(400).json({ error: 'Invalid vetId or ownerId' });
    }

    const newAppt = new Appointment({ petName, date, vetId, ownerId });
    await newAppt.save();
    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
