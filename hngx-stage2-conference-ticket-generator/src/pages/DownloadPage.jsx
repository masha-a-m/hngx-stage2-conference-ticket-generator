import React from 'react';
import Header from '../components/Header'; 

const DownloadPage = () => {
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
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-md p-8 mt-8 relative">
          {/* Title and Step Indicator */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-black font-bold">Your Downloaded Ticket</h2>
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
            <h3 className="text-xl font-bold">{formData.name || 'Not Provided'}</h3>
            <p className="text-lg">{formData.email || 'Not Provided'}</p>
            <p className="text-base text-gray-700">{formData.aboutProject || 'Not Provided'}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-blue-600 text-white px-4 py-2 rounded-md w-1/2"
            >
              Go Back
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md w-1/2"
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

export default DownloadedTicketPage;