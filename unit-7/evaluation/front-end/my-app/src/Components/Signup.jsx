import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: '',
    vehicle_type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to backend for registration
      const response = await fetch('http://localhost:7000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        // Redirect to login page
        // You can use React Router for navigation or redirect using window.location.href
        window.location.href = '/login';
      } else {
        // Registration failed
        const data = await response.json();
        console.error('Registration failed:', data.msg);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <input type="text" name="vehicle_type" value={formData.vehicle_type} onChange={handleChange} required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
