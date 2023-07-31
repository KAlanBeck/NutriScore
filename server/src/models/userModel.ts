import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbURI = process.env.DB_URI!;

mongoose.connect(dbURI)
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  meals: {
    breakfast: {
      type: [String],
      default: [],
    },
    lunch: {
      type: [String],
      default: [],
    },
    dinner: {
      type: [String],
      default: [],
    },
    snacks: {
      type: [String],
      default: [],
    },
  },
});

const User = mongoose.model('User', userSchema);

export default User;