// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Send a POST request to create a new user
    axios.post('/api/users', formData)
      .then(response => {
        console.log('User created:', response.data);
        // Reset the form
        setFormData({ firstName: '', lastName: '', email: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
