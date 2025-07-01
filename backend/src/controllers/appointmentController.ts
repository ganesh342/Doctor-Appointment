import { RequestHandler } from 'express';
import { appointments } from '../data/mockData';

let data = [...appointments];

export const getAppointments: RequestHandler = (req, res) => {
  res.json(data);
};

export const getAppointmentById: RequestHandler = (req, res) => {
  const appointment = data.find((a) => a.id === req.params.id);
  if (!appointment) {
    res.status(404).json({ message: 'Not found' });
    return;
  }
  res.json(appointment);
};

export const postPrescription: RequestHandler = (req, res) => {
  const index = data.findIndex((a) => a.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  data[index] = {
    ...data[index],
    prescription: {
      medicine: req.body.medicine,
      dosage: req.body.dosage,
      instructions: req.body.instructions || '',
    },
  };

  res.json(data[index]);
};
