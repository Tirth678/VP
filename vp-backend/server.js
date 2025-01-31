const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

// User Model
const UserSchema = new mongoose.Schema({
  phone: { type: String, unique: true },
  password: String,
  transactions: [{
    amount: Number,
    type: String,
    timestamp: Date
  }]
});

const User = mongoose.model('User', UserSchema);

// Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token');
  }
};

// API Endpoints
app.post('/api/register', async (req, res) => {
  // Registration logic with phone verification
});

app.post('/api/login', async (req, res) => {
  // Login logic with JWT generation
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
