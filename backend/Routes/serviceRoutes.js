// routes/serviceRoutes.js
import express from 'express';
import {
  getAllServices,
  getServicesByCategory,
  createService,
  updateService,
  deleteService,
} from '../Controllers/serviceController.js';

const router = express.Router();

// Routes
router.get('/services', getAllServices);
router.get('/services/:category', getServicesByCategory);
router.post('/services', createService);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

export default router;
