import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import FormPage from './pages/FormPage'; 
import TicketPage from './pages/TicketPage';
import DownloadTicket from './pages/DownloadTicket';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/download" element={<DownloadTicket />} />
      </Routes>
    </Router> 
  );
};

export default App;