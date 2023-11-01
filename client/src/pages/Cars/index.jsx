import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/server/cars",
    }).then((res) => {
      console.log(res.data);
      setCars(res.data);
    });
  }, []);

  console.log(cars);
  return (
    <div>
      Show all cars here:
      <ul>
        {cars.map((car) => {
          return (
            <li key={car._id}>
              <p>{car.name}</p>
              <p>{car.color}</p>
              <p>{car.age}</p>
              <p>{car.location}</p>
              <p>{car.readyToDrive}</p>
              <p>{car.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cars;
