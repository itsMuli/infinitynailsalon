import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  getBookedSlotsByDate
} from '../Controllers/appointmentController.js';

const router = express.Router();

router.post('/appointments', createAppointment);
router.get('/appointments', getAppointments);
router.get('/appointments/:id', getAppointmentById);
router.get('/appointments/slots/:date', getBookedSlotsByDate); // Adjusted route

export default router;
