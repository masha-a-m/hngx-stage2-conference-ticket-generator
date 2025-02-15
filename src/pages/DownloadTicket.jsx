import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import html2canvas from 'html2canvas';

const DownloadTicket = () => {
  
  const ticketRef = useRef(null); 
  const handleDownloadTicket = () => {
    html2canvas(ticketRef.current) 
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png'); 
        const link = document.createElement('a'); 
        link.href = imgData;
        link.download = 'ticz-ticket.png'; 
        link.click(); 
      })
      .catch((error) => {
        console.error('Error downloading ticket:', error);
      });
  };

  const [formData, setFormData] = React.useState({
    name: '', 
    email: '', 
    aboutProject: '', 
    profilePhoto: null, 
    ticketType: '', 
    numberOfTickets: 1, 
  });

  const handleBack = () => {
    window.history.back();
  };
  
  React.useEffect(() => {
    try {
      const savedData = localStorage.getItem('attendeeDetails');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  return (
    <div
      className="min-h-screen custom-gradient"
    >
      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="p-6">
        {/* Outer Box */}
        <div className="max-w-xl mx-auto custom-gradient shadow-md p-6 mt-8 border-4 transparent rounded-3xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-white font-bold">Ready</h2>
            <span className="text-sm step-name font-bold">Step 3/3</span>
          </div>

          {/* Horizontal Line */}
          <hr className="border-t transparent h-2 mb-14 size-74 mx-auto" />

          <div className="mb-8 text-center">
            <h3 className="text-3xl text-white font-bold mb-2">Your Ticket is Booked!</h3>
            <p className="text-gray-200 text-normal">You can download or check your email for a copy.</p>
          </div>

          {/* Ticket Details Container */}
          <div ref={ticketRef} 
          className="custom-gradient border border-nav rounded-3xl overflow-hidden relative mb-8">
            {/* Ticket Content */}
            <div className="p-6 space-y-6">
              {/* Event Name */}
              <h4 className="text-4xl font-bold text-white text-center">Techember Fest "25</h4>

              <div className="flex items-center justify-center space-x-2">
                <span role="img" aria-label="location" className="text-red-500 text-2xl">
                  📍
                </span>
                <p className="text-normal step-name text-center">04 Rumens Road, Ikoyi, Lagos</p>
              </div>

              {/* Uploaded Profile Photo */}
              {formData.profilePhoto && (
                <div className="flex justify-center items-center">
                  <img
                    src={formData.profilePhoto}
                    alt="Profile"
                    className="w-24 h-24 rounded-lg border-2 border-black object-cover"
                  />
                </div>
              )}

              {/* User Details Section */}
              <div className="border border-black text-white! rounded-lg p-6 space-y-4">
                {/* Name */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <p className="font-bold text-normal md:w-1/2">Enter your name:</p>
                  <p className="text-normal md:w-1/2 text-right">{formData.name || 'Not Provided'}</p>
                </div>

                {/* Email */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <p className="font-bold text-normal md:w-1/2">Enter your email *:</p>
                  <p className="text-normal md:w-1/2 text-right">{formData.email || 'Not Provided'}</p>
                </div>

                {/* Ticket Type */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <p className="font-bold text-normal md:w-1/2">Ticket type:</p>
                  <p className="text-normal md:w-1/2 text-right">{formData.ticketType || 'Not Selected'}</p>
                </div>

                {/* Number of Tickets */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <p className="font-bold text-normal md:w-1/2">Ticket for:</p>
                  <p className="text-normal md:w-1/2 text-right">{formData.numberOfTickets || 1} person(s)</p>
                </div>

                {/* Special Request */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <p className="font-bold text-normal md:w-1/2">Special request:</p>
                  <p className="text-normal md:w-1/2 text-right">{formData.aboutProject || 'None'}</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center items-center">
                <img
                  src="assets/bar.png"
                  alt="bar Code"
                  className="w-66 h-40 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button className="progress-bar border transparent bg-transparent! px-4 py-2 rounded-md w-full md:w-4/9"
            onClick={handleBack}
            >
              Go Back
            </button>
            <button
              className="next-btn text-white! px-4 py-2 rounded-md w-full md:w-4/9"
              onClick={handleDownloadTicket}
            >
              Download Ticket
            </button>
          </div>
        </div>
      </main>

      <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

    </div>
  );
};

export default DownloadTicket;