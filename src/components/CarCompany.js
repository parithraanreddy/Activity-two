// src/components/CarCompany.js
import React from 'react';
import CarModel from './CarModel';

const CarCompany = ({ company }) => (
  <div className="car-company">
    <h2>{company.name}</h2>
    <div className="model-list">
      {company.models.map((model, index) => (
        <CarModel key={index} model={model} />
      ))}
    </div>
  </div>
);

export default CarCompany;
