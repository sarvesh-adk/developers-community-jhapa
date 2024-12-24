import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  discordUsername: {
    type: String,
    required: true,
  },
  techStack: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  githubUsername: {
    type: String,
    required: true,
  },
  linkedinProfile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Member = mongoose.model('Member', memberSchema);