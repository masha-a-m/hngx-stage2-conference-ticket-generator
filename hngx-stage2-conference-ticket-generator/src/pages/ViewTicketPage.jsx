import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; 

const TicketPage = () => {
  const navigate = useNavigate(); 
  const handleBookAnotherTicket = () => {
    navigate('/'); 
  };

  const handleDownloadTicket = () => {
    alert('Ticket downloaded!');
  };

  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    aboutProject: '',
    profilePhoto: null,
  });

  useEffect(() => {
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
        <div className="max-w-2xl mx-auto btn-bg rounded-4xl shadow-md p-8 mt-8">
          {/* Title and Step Indicator */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-white font-bold">Ready</h2>
            <span className="text-sm step-name">Step 3/3</span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-1 bg-blue-200 rounded-full mb-6">
            <div
              className="absolute top-0 left-0 h-full bg-blue-700 rounded-full"
              style={{ width: '100%' }}
            ></div>
          </div>

          <div className="mb-8 text-center">
            <h3 className="text-2xl text-white font-bold mb-2">Your Ticket is Booked!</h3>
            <p className="step-name">
              You can download or check your email for a copy.
            </p>
          </div>

          {/* Ticket */}
          {/* Ticket Section */}
          <div className="relative w-full h-48 md:h-64 bg-gray-100 rounded-3xl overflow-hidden">
            {/* SVG Background */}
            <svg
              width="464"
              height="165"
              viewBox="0 0 464 165"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 md:w-full md:h-full md:visible"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M390 0H16C7.16344 0 0 7.16345 0 16V149C0 157.837 7.16345 165 16 165H391C390.448 165 390 164.552 390 164C390 163.448 390.448 163 391 163H395C395.552 163 396 163.448 396 164C396 164.552 395.552 165 395 165H448C456.837 165 464 157.837 464 149V16C464 7.16344 456.837 0 448 0H396C396 0.552285 395.552 1 395 1H391C390.448 1 390 0.552285 390 0ZM390 4C390 3.44772 390.448 3 391 3H395C395.552 3 396 3.44772 396 4C396 4.55228 395.552 5 395 5H391C390.448 5 390 4.55228 390 4Z"
                fill="#D9D9D9"
              />
              <path
                d="M398 6C398 3.79086 399.791 2 402 2H448C455.732 2 462 8.26801 462 16V149C462 156.732 455.732 163 448 163H402C399.791 163 398 161.209 398 159V6Z"
                fill="#0E464F"
              />
              <path
                d="M2 16C2 8.26801 8.26801 2 16 2H384C386.209 2 388 3.79086 388 6V159C388 161.209 386.209 163 384 163H16C8.26801 163 2 156.732 2 149V16Z"
                fill="#0E464F"
              />
              <g filter="url(#filter0_d_11_797)">
                <rect x="10" y="12" width="120.375" height="117" rx="5.625" fill="#D9D9D9" />
                <rect
                  x="8.875"
                  y="10.875"
                  width="122.625"
                  height="119.25"
                  rx="6.75"
                  stroke="#0E464F"
                  strokeWidth="2.25"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_11_797"
                  x="3.25"
                  y="9.75"
                  width="133.875"
                  height="135"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="9" />
                  <feGaussianBlur stdDeviation="2.25" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.125244 0 0 0 0 0.120007 0 0 0 0 0.120007 0 0 0 0.25 0"
                  />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_797" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_797" result="shape" />
                </filter>
              </defs>
            </svg>

            {/* Ticket Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-4">
              {/* QR Code */}
              <div className="flex rounded-xl justify-center items-center">
                <img
                  src="src\assets\download.png" // Replace with actual QR code image
                  alt="QR Code"
                  className="md:w-30 md:h-30 absolute md:left-8 md:top-14 top-4 left-1 w-6/6 h-6/6"
                />
              </div>

              {/* Ticket Details */}
              <div className="space-y-1 md:ml-4 md:mb-10  -mb-10">
                <h4 className="text-xs md:text-4xl step-name font-bold">Techember</h4>
                <p className="font-bold text-xs md:text-4xl step-name">Fest "25</p>
                <div className="flex items-center step-name space-x-2">
                  <span role="img" aria-label="emergency" className="text-red-500 text-xs">
                    📍
                  </span>
                  <p className="md:text-sm text-xs step-name ">04 Rumens Road, Ikoyi, Lagos</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span role="img" aria-label="calendar" className="text-blue-500 text-sm">
                    📅
                  </span>
                  <p className="text-sm step-name">March 15, 2025 | 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Golden Triangle */}
            <div className="absolute top-8 right-30 transform rotate-45">
              <div
                className="w-8 h-8 linear text-center flex items-center justify-center text-black font-bold"
                
              >
                REG
              </div>
            </div>

            

            {/* User Name */}
            <div className="absolute top-48 left-136 right-30 transform rotate-[-90deg]">

            <p className="font-bold text-normal whitespace-nowrap step-name">Techember Fest "25</p>
            </div>

            
            <div className="absolute bottom-16 left-136 right-4 transform rotate-[-90deg]">
            
              <p className="font-bold step-name whitespace-nowrap text-xs">Username: {formData.name || 'Not Provided'} </p>
            </div>

            <div className="absolute bottom-14 left-144 right-4 transform rotate-[-90deg]">
              <div className="border-2 border-solid line w-29 rounded-lg"></div>
            </div>
            <div className="absolute bottom-8 left-148 right-4 transform rotate-[-90deg]">
              <div className="border-2 border-solid line w-49 rounded-lg"></div>
            </div>

            <div className="absolute bottom-2 left-140 right-40 transform rotate-[-97deg]">
              <div
                className="w-6 h-6 linear text-center flex items-center justify-center font-bold"
                
              >
                REG
              </div>
            </div>


            {/* Ticket Footer */}
            <div
              className="bg-gray-500  absolute bottom-0 left-0 right-0"
              style={{ height: '26px', width: '100%'}}
            >
            <div
              className="absolute bottom-0 right-16 transform rotate-[-25deg] w-2 h-full"
            ></div>
              <p className="text-normal font-bold one-entry ml-5">Ticket for one entry only.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="md:rounded-full border btn-bg mt-10">
          <div className="flex justify-around flex-col-reverse md:flex-row">
            <button 
            onClick={handleBookAnotherTicket}
            className="px-4 py-2 progress-bar border transparent bg-transparent! rounded-md w-full md:w-3/8">
              Book Another Ticket
            </button>
            <button 
            onClick={handleDownloadTicket}
            className="next-btn text-white! px-4 py-2 rounded-md w-full md:w-3/8">
              View Ticket
            </button>
          </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TicketPage;