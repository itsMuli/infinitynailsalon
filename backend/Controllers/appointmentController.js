import Appointment from '../models/appointmentModel.js';
import { startOfDay, endOfDay } from 'date-fns';

// Create a new appointment
export const createAppointment = async (req, res) => {
  const { date, timeSlot } = req.body;

  try {
    const newAppointment = new Appointment({
      date: new Date(date), // Ensure date is stored as a Date object
      timeSlot
    });
    await newAppointment.save();

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save appointment' });
  }
};

// Get all appointments (optional)
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve appointments' });
  }
};

// Get a single appointment by ID (optional)
export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve appointment' });
  }
};

export const getBookedSlotsByDate = async (req, res) => {
  try {
    const { date } = req.params;

    // Convert the date parameter to a Date object
    const dateObject = new Date(date);

    // Get the start and end of the day for the given date
    const start = startOfDay(dateObject);
    const end = endOfDay(dateObject);

    console.log('Date:', dateObject);
    console.log('Start of day:', start);
    console.log('End of day:', end);

    // Find appointments that fall within the start and end of the day
    const appointments = await Appointment.find({
      date: { $gte: start, $lt: end }  // Ensure inclusive of start and exclusive of end
    });

    // Extract the time slots from the appointments
    const bookedSlots = appointments.map(appointment => appointment.timeSlot);

    res.status(200).json({ bookedSlots });
  } catch (error) {
    console.error('Error retrieving booked slots:', error);
    res.status(500).json({ error: 'Failed to retrieve booked slots for the selected date' });
  }
};
