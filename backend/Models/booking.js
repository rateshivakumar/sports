
// models/Booking.js

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  groundName: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("booking", bookingSchema);

export default Booking;
