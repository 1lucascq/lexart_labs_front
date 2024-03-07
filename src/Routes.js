import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Smartphones from './pages/Smartphones';
import SmartphoneDetails from './pages/SmartphoneDetails';

const RoutesOrganizer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/smartphones/:smartphoneId" element={<SmartphoneDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesOrganizer