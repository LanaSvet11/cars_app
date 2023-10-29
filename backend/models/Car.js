const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    readyToDrive: { type: Boolean, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
