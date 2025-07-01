import express from 'express';
import {
  getAppointments,
  getAppointmentById,
  postPrescription,
} from '../controllers/appointmentController';

const router = express.Router();

router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.post('/:id/prescription', postPrescription);

export default router; 

