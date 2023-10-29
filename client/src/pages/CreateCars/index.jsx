import { useState } from "react";
import axios from "axios";
const CreateCars = () => {
  const [carData, setCarData] = useState({
    name: "",
    color: "",
    age: 0,
    location: "",
    readyToDrive: false,
    description: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!carData.name || !carData.color) {
      setError("Invalid inputs!");
      return;
    }
    console.log(carData);
    axios({
      method: "POST",
      url: "/server/cars",
      data: carData, // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
    }).then((res) => {
      console.log(res.data);
      setData({
        name: "",
        color: "",
        age: "",
        location: "",
        readyToDrive: false,
        description: "",
      });
      setError("");
    });
  };
  return (
    <div>
      <h1>New car page</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={carData.name}
          onChange={(e) => setCarData({ ...carData, name: e.target.value })}
        />
        <br />
        Color:{" "}
        <input
          type="text"
          name="color"
          value={carData.color}
          onChange={(e) => setCarData({ ...carData, color: e.target.value })}
        />
        <br />
        Age:{" "}
        <input
          type="number"
          name="age"
          value={carData.age}
          onChange={(e) => setCarData({ ...carData, age: e.target.value })}
        />
        <br />
        Location:{" "}
        <input
          type="text"
          name="location"
          value={carData.location}
          onChange={(e) => setCarData({ ...carData, location: e.target.value })}
        />
        <br />
        Is Ready To Drive:{" "}
        <input
          type="checkbox"
          name="readyToDrive"
          value={carData.readyToDrive}
          onChange={(e) =>
            setFruitData({ ...carData, readyToDrive: !carData.readyToDrive })
          }
        />
        <br />
        Description:{" "}
        <input
          type="text"
          name="description"
          value={carData.description}
          onChange={(e) =>
            setCarData({ ...carData, description: e.target.value })
          }
        />
        <br />
        <button>Create Car</button>
      </form>
    </div>
  );
};
export default CreateCars;
