import Service from '../models/serviceModel.js';

// Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get services by category
export const getServicesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const services = await Service.find({ category });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new service
export const createService = async (req, res) => {
  const { category, name, duration, price } = req.body;

  const newService = new Service({
    category,
    name,
    duration,
    price,
  });

  try {
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a service
export const updateService = async (req, res) => {
  const { id } = req.params;
  const { category, name, duration, price } = req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { category, name, duration, price },
      { new: true }
    );
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a service
export const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
