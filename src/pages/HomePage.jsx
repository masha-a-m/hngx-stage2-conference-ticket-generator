import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);

 
  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    setIsDropdownOpen(false);
  };

   
  const handleTicketSelect = (ticketType) => {
    setSelectedTicket(ticketType); 
  };

  const handleNext = () => {
    if (!selectedTicket) {
      alert('Please select a ticket type before proceeding.');
      return;
    }
    navigate('/form'); 
  };

  return (
    <div
      className="min-h-screen custom-gradient">
      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="p-6">
        {/* Outer Box */}
        <div className="max-w-2xl mx-auto bg-white card-fill card-stroke rounded-4xl shadow-md p-8 mt-8">
          {/* Title and Step Indicator */}
          <div className="flex flex-col md:flex-row justify-between space-y-3 md:items-center mt-5 mb-4">
            <h2 className="text-2xl text-white font-normal">Ticket Selection</h2>
            <span className="text-sm step-name">Step 1/3</span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-1 bg-blue-200 rounded-full mb-6">
            <div className="absolute top-0 left-0 h-full bg-blue-700 rounded-full" style={{ width: '33%' }}></div>
          </div>

          <div className="card-stroke card-fill2 rounded-3xl p-6 mb-6">
            {/* Inner Box */}
            <div className="radial-bg card-stroke rounded-3xl text-center shadow-md md:p-4">
              <h3 className="md:text-3xl text-normal font-bold mb-2 mt-6 pt-5 step-name">Techember Fest "25</h3>
              <p className="text-gray-700 text-xs mb-4 step-name">
                Join us for an unforgettable experience at <br />
                Casadopia! Secure your spot now.
              </p>
              <div className="flex flex-col md:flex-row text-xs mb-4 space-x-4 step-name text-center justify-center">
                <div>
                  <span role="img" aria-label="location">📍</span> Hassan Street
                </div>
                <div className="flex space-x-2 space-y-2 flex-row md:flex-row">
                  <span className="hidden  md:visible">| |</span>
                  <div className="ml-4">
                    <span>March 15, 2025</span>
                  </div>
                  <span className="hidden md:visible">|</span>
                  <span>7:00 PM</span>
                </div>
              </div>
            </div>
          

          {/* Horizontal Line */}
          <hr className="border-t second-progress my-6" />

          {/* Ticket Types */}
          <div>
            <h3 className="step-name mb-3 font-jejumyeongjo">Select Ticket Type:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl card-fill3 rounded-3xl shadow-md p-8 mt-3">
              {/* Regular Access */}
              <div 
               onClick={() => handleTicketSelect('Regular Access')}
               className={`regular-access rounded-lg p-4 flex xs:hidden justify-between items-center cursor-pointer ${
                  selectedTicket === 'Regular Access' ? 'ring-2 ring-blue-500' : ''
                }`}
                >
                <div className="flex flex-col">
                  <p className="step-name">REGULAR ACCESS</p>
                  <p className="text-sm step-name">20 left!</p>
                </div>
                <button className="free-btn step-name px-4 py-2 rounded-full font-bold invisible md:visible">
                  Free
                </button>
              </div>
              {/* VIP Access */}
              <div 
              onClick={() => handleTicketSelect('VIP Access')}
              className={`border card-stroke2 rounded-lg p-4 flex justify-between items-center cursor-pointer ${
                  selectedTicket === 'VIP Access' ? 'ring-2 ring-blue-500' : ''
                }`}
                >
                <div
                >
                  <p className="step-name">VIP ACCESS</p>
                  <p className="text-sm step-name">20 left!</p>
                </div>
                <button className="step-name vip px-4 py-2 rounded-full font-bold invisible md:visible">
                  $50
                </button>
              </div>
              {/*  VVIP Access */}
              <div
              onClick={() => handleTicketSelect('VVIP Access')}
                className={`border card-stroke2 rounded-lg p-4 flex justify-between items-center cursor-pointer ${
                  selectedTicket === 'VVIP Access' ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div>
                  <p className="step-name">VVIP ACCESS</p>
                  <p className="text-sm step-name">120 left!</p>
                </div>
                <button className="step-name vip px-4 py-2 rounded-full font-bold invisible md:visible">
                  $150
                </button>
              </div>
            </div>
          </div>

          {/* Number of Tickets */}
          <div className="mt-8">
            <h3 className=" step-name mb-2">Number of Tickets</h3>
            <div className="relative">
              {/* Input Field */}
              <input
                type="text"
                readOnly
                value={selectedNumber}
                className="w-full p-2 border input rounded-lg pr-8 text-white cursor-pointer"
                placeholder="1"
              />

              {/* Arrow Icon */}
              <button
                className="absolute inset-y-0 right-0 flex items-center bg-black"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill=""
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul
                  className="absolute top-full left-0 mt-2 w-full text-black bg-white rounded-lg shadow-md z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {[...Array(10).keys()]
                    .filter((num) => num >= 2)
                    .map((num) => (
                      <li
                        key={num + 1}
                        className={`py-2 px-4 cursor-pointer hover:bg-gray-100 ${
                          selectedNumber === num + 1 && 'bg-gray-100'
                        }`}
                        onClick={() => handleNumberSelect(num + 1)}
                      >
                        {num + 1}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <div className="md:rounded-full card-fill">
              <div className="flex justify-around flex-col-reverse md:flex-row">
                <button className="px-4 py-2 progress-bar border transparent bg-transparent! rounded-md w-full md:w-3/8">Cancel</button>

                <button
                  onClick={handleNext} // Attach the handleNext function
                  className="next-btn text-white! px-4 py-2 rounded-md w-full md:w-3/8"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;