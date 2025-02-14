import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; 

const DownloadTicket = () => {
  const [formData, setFormData] = React.useState({
    name: '', 
    email: '', 
    aboutProject: '',
    profilePhoto: null, 
  });

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

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div
      className="min-h-screen custom-gradient"
    >
      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="p-6">
        {/* Outer Box */}
        <div className="max-w-2xl mx-auto btn-bg border cancel rounded-4xl shadow-md p-8 mt-8 relative">
          {/* Title and Step Indicator */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-white font-bold">Your Downloaded Ticket</h2>
            <span className="text-sm text-gray-500">Step 3/3</span>
          </div>

          {/* Progress Line */}
          <div className="relative h-1 bg-blue-200 rounded-full mb-6">
            <div
              className="absolute top-0 left-0 h-full bg-blue-700 rounded-full"
              style={{ width: '100%' }}
            ></div>
          </div>

          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            {formData.profilePhoto && (
              <img
                src={formData.profilePhoto}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-blue-600"
              />
            )}
            <h3 className="text-xl font-bold step-name">{formData.name || 'Not Provided'}</h3>
            <p className="text-lg step-name">{formData.email || 'Not Provided'}</p>
            <p className="text-base text-gray-700 step-name">{formData.aboutProject || 'Not Provided'}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="px-4 py-2 progress-bar border transparent bg-transparent! rounded-md w-full md:w-4/9"
            >
              Go Back
            </button>
            <button
              className="next-btn text-white! px-4 py-2 rounded-md w-full md:w-4/9"
              onClick={() => alert('Ticket downloaded successfully!')}
            >
              Download Ticket
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DownloadTicket;