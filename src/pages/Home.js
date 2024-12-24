// src/pages/Home.js
import React from 'react';
import { carCompanies } from '../data';
import CarCompany from '../components/CarCompany';

const Home = () => (
  <div className="home-page">
    {carCompanies.map((company, index) => (
      <CarCompany key={index} company={company} />
    ))}
  </div>
);

export default Home;
