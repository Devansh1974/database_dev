import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const { username, email, role } = req.body;
    if (!username || !email || !role) 
      return res.status(400).json({ error: 'Missing fields' });

    const newUser = new User({ username, email, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 