
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    
    setShow({
      name: 'Sample Show',
      network: 'Sample Network',
    });
  }, [id]);

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Booking submitted:', formData);
    
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6">Book Tickets for {show && show.name}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700 text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Book Now
        </button>
      </form>
      </div>
      )
  }
 
  export default BookingForm;