const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();

const Port = process.env.PORT || 2000;
const MONGODB_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/register', userRoutes);
app.use('/appointments', appointmentRoutes);

app.listen(Port, () => console.log(`Server running on port ${Port}`));
