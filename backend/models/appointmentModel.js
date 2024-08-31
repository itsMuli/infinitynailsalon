import mongoose from 'mongoose';

// Define the schema for appointments
const appointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true }
});

// Create the Appointment model using the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
