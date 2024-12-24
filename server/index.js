import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Member } from './models/member.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dcj')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.post('/api/members', async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});