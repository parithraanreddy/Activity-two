// src/components/CarModel.js
import React from 'react';

const CarModel = ({ model }) => (
  <div className="car-model">
    <img src={model.image} alt={model.name} />
    <h3>{model.name}</h3>
    <p>{model.description}</p>
    <button>Book Now</button>
  </div>
);

export default CarModel;
