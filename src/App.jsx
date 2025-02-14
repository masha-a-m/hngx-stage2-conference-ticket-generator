import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Adjust the path as needed
import FormPage from './pages/FormPage'; // To be created later
import TicketPage from './pages/TicketPage'; // To be created later

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
    </Router>
  );
};

export default App;