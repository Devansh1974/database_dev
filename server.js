import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';

dotenv.config();

const Port = process.env.PORT || 2000
const MONGODB_URI = process.env.MONGO_URI

const app = express();
app.use(express.json());

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/register', userRoutes);
app.use('/appointments', appointmentRoutes);

app.listen(Port, () => console.log(`Server running on port ${Port}`));
