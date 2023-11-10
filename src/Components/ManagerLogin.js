import React, { useState } from 'react';
 
function ManagerLogin() {
  const [formData, setFormData] = useState({
    uname: '',
    pwd: ''
  });
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
 
      const data = await response.json();
 
      // Assuming the API returns an array with a count value
      if (data.length > 0 && data[0]['']) {
        alert('Login successful');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
 
  return (
    <div>
      <h2>ManagerLogin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="uname" placeholder="Username" value={formData.uname} onChange={handleChange}  required />
        </div>
        <div>
          <input
            type="password"
            name="pwd"
            placeholder="Password"
            value={formData.pwd}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
 
export default ManagerLogin;