import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    category: String,
    name: String,
    duration: String,
    price: String,
  });
  
  const Service = mongoose.model('Service', serviceSchema);

  export default Service;