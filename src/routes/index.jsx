import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Principal } from '../pages/principal';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  );
};