const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet"); // adds a bunch of standard security to server
require("dotenv").config();
require("./config/db.js");
const Car = require("./models/Car.js");
const PORT = 3000;

const app = express();

// START MIDDLEWARE //
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(helmet());
// END MIDDLEWARE //

// START ROUTES //

// create a new car

app.post("/cars", async (req, res) => {
  try {
    let response = await Car.create(req.body);
    res.status(201).send(response);
  } catch (err) {
    console.error(err);
    res.send("ERROR");
  }
});

// get all cars
app.get("/cars", async (req, res) => {
  try {
    let cars = await Car.find(); // Using a different variable name
    res.send(cars);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// get a specific car by name
app.get("/cars/:carName", async (req, res) => {
  try {
    const carName = req.params.carName; // Get the car name from the request parameters
    const car = await Car.findOne({ name: carName }); // Find a car with the specified name
    if (!car) {
      res.status(404).send({ error: "Car not found" });
    } else {
      res.send(car); // Respond with the found car
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// END ROUTES //

app.listen(PORT, () => {
  console.log(`Server LIVE on port ${PORT}`);
});
