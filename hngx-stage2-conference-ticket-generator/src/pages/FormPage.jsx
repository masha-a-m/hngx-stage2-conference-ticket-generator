import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; 

const FormPage = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/ticket'); 
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    aboutProject: '',
    profilePhoto: null,
  });

  const [step, setStep] = useState(2);
  const [errors, setErrors] = useState({});


    useEffect(() => {
      try {
      const savedData = localStorage.getItem('attendeeDetails');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);


  //   try {
  //     const savedData = JSON.parse(localStorage.getItem('attendeeDetails'));
  //     console.log('Retrieved data from localStorage:', savedData); // Debugging line
  //     if (savedData) {
  //       setFormData(savedData);
  //     }
  //   } catch (error) {
  //     console.error('Error loading data from localStorage:', error);
  //   }
  // }, []);

  useEffect(() => {
    try {
      let dataToSave = { ...formData };
      if (formData.profilePhoto && typeof formData.profilePhoto === 'string') {
        dataToSave = { ...dataToSave, profilePhoto: formData.profilePhoto }; 
      }
      localStorage.setItem('attendeeDetails', JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //  file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: event.target.result, // Save as base64 string
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.aboutProject.trim()) {
      newErrors.aboutProject = 'About project is required.';
      isValid = false;
    }

    if (!formData.profilePhoto) {
      newErrors.profilePhoto = 'Profile photo is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(3); 
      navigate('/ticket'); 
    }
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
        <div className="max-w-xl mx-auto card-fill card-stroke rounded-3xl shadow-md p-8 mt-8">
          {/* Title and Step Indicator */}
          <div className="flex justify-between items-center mt-5 mb-4">
            <h2 className="text-2xl text-white">Attendee Details</h2>
            <span className="text-sm step-name">Step {step}/3</span>
          </div>

          {/* Progress Line */}
          <div className="relative h-1 bg-blue-200 rounded-full mb-6">
            <div
              className="absolute top-0 left-0 h-full bg-blue-700 rounded-full"
              style={{ width: '66%' }}
            ></div>
          </div>

          {/* Profile Photo Upload */}
          <div className="card-stroke card-fill2 rounded-3xl p-6  mb-6">
          <div className="inner-bg border rounded-2xl p-6 mb-10">
            <p className="text-sm step-name mt-2 mb-4">Upload Profile Photo</p>
            <div className="flex justify-center items-center bg-black opacity-20 rounded-lg p-1 relative">
            <div className="w-40% rounded-3xl image-upload">
              {formData.profilePhoto ? (
                <div
                  className="w-full h-full cursor-pointer"
                  onClick={() => setFormData({ ...formData, profilePhoto: null })}
                >
                  <img
                    src={formData.profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity"
                  >
                    <span role="img" aria-label="upload" className="text-white text-2xl">
                      📥
                    </span>
                    <p className="text-white text-sm">Drag & drop or click to upload</p>
                  </div>
                </div>
              ) : (
                <label htmlFor="profile-upload" className="cursor-pointer w-full h-40 flex flex-col items-center justify-center p-4">
                  <span role="img" aria-label="upload" className="text-white text-2xl mb-2">
                    📥 
                  </span>
                  <p className="text-white text-sm text-center">Drag & drop or click to upload</p>
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              )}
              {errors.profilePhoto && (
                <p className="text-red-500 text-sm mt-2">{errors.profilePhoto}</p>
              )}
            </div>
          </div>
        </div>
      

          {/* Horizontal Line */}
          <hr className="border-t second-progress my-6" />

          {/* Form Fields */}
          <div>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block step-name mb-2">Enter your name</label>
              <input
                type="text"
                name="name" placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 border form-input rounded-xl ${
                errors.name ? 'border-red-500' : ''
              }`} 
  />
  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
</div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block step-name mb-2">Enter your email *</label>
              <div className="flex items-center border form-input rounded-xl overflow-hidden">
                <span className="px-3 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 text-white text-xs md:text-normal "
                  placeholder="hello@avioflagos.io"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1"> {errors.email}</p>}
            </div>

            {/* About Project Textarea */}
            <div className="mb-4">
              <label className="block step-name mb-2">About the project</label>
              <textarea
                name="aboutProject"
                value={formData.aboutProject}
                onChange={handleInputChange}
                className="w-full p-2 h-40 border textarea form-input rounded-lg"
                placeholder="Textarea"
              ></textarea>
              {errors.aboutProject && (
                <p className="text-red-500 text-sm mt-1"> {errors.aboutProject} </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse md:flex-row justify-between gap-6">
            <button
              onClick={handleBack}
              className="progress-bar border transparent bg-transparent! px-4 py-2 rounded-md w-full md:w-1/2"
            >
              Back
            </button>
            <button
              onClick={handleNextPage}
              className="next-btn text-white! px-4 py-2 rounded-md w-full md:w-1/2"
            >
              Get My Free Ticket
            </button>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default FormPage;