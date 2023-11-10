import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !userType) {
      alert('Please fill in all the fields.');
      return;
    }
 
    try {
      const response = await fetch('https://localhost:7241/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, userType })
      });
 
      const data = await response.text();
 
      if (response.ok) {
        alert(data);
        // Redirect the user based on their user type
        handleRedirect(userType);
      } else {
        console.error(data);
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      setLoginError('An error occurred. Please try again later');
    }
  };
 
  const handleRedirect = (userType) => {
    switch (userType) {
      case 'HR':
        navigate('/Hr');
        break;
      case 'Manager':
        navigate('/HomeManager');
        break;
      case 'Employee':
        navigate('/Master');
        break;
      default:
        alert('Invalid user type');
    }
  };
 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Select Role:</label><br />
          <input
            type="radio"
            name="userType"
            value="HR"
            checked={userType === 'HR'}
            onChange={() => setUserType('HR')}
          /> HR
          <input
            type="radio"
            name="userType"
            value="Manager"
            checked={userType === 'Manager'}
            onChange={() => setUserType('Manager')}
          /> Manager
          <input
            type="radio"
            name="userType"
            value="Employee"
            checked={userType === 'Employee'}
            onChange={() => setUserType('Employee')}
          /> Employee
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {loginError && <div>{loginError}</div>}
    </div>
  );
};
 
export default Login;