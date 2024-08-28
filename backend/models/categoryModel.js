import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  services: [serviceSchema]  // Array of service objects
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
