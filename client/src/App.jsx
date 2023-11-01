import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Cars from "./pages/Cars";
import CreateCars from "./pages/CreateCars";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create New Car</button>
        </Link>
        <Link to="/cars">
          <button>Cars</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/create" element={<CreateCars />}></Route>
      </Routes>
    </div>
  );
}
export default App;
