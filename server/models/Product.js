const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: [true, "Please provide price"]
  },

  category: {
    type: String,
    required: true,
    enum: ["CPU", "GPU", "RAM", "SSD", "Motherboard", "Power Supply", "Case", "Cooling", "Accessories"]
  },

  image: {
    type: String
  },

  specifications: {
    type: Object,
    default: {}
  },

  stock: {
    type: Number,
    default: 0
  },

  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }

}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
