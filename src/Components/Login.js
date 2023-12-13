import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7186/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: username, password, userType }),
      });
      if (response.ok) {
        // Set user role in session storage based on userType
        switch (userType) {
          case 'Employee':
            sessionStorage.setItem('userRole', userType);
            sessionStorage.setItem('uid', username);
            sessionStorage.setItem('layout', 'Employee');
            navigate('/HomeEmp');
            break;
          case 'Manager':
            sessionStorage.setItem('userRole', userType);
            sessionStorage.setItem('uid', username);
            sessionStorage.setItem('layout', 'Manager');
            navigate('/HomeManager');
            break;
          case 'Hr':
            sessionStorage.setItem('userRole', userType);
            sessionStorage.setItem('uid', username);
            sessionStorage.setItem('layout', 'HR');
            navigate('/HrHome');
            break;
          default:
            alert('Invalid userType');
        }
      } else {
        console.error('Login failed');
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An unexpected error occurred');
    }
  };
  const handleNewUserClick = () => {
    navigate('/Register');
  };
 
  return (
    <div className="container mt-5" style={{color:"white"}}>
    <div className="col-md-6 offset-md-3">
    <div className="login-container" style={{width:"300px",height:"200px"}}>
    <form onSubmit={handleSubmit} className="mb-3">
      <center><h1><label style={{  fontStyle: 'italic', fontFamily: 'Comic Sans MS, cursive'  }}>Login</label></h1></center>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
 
      <div className="user-type-radio mb-3">
        <label>
          <input type="radio" name="userType" value="Employee" checked={userType === 'Employee'}  onChange={() => setUserType('Employee')}
          />
          Employee
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="Manager"
            checked={userType === 'Manager'}
            onChange={() => setUserType('Manager')}
          />
          Manager
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="Hr"
            checked={userType === 'Hr'}
            onChange={() => setUserType('Hr')}
          />
          HR
        </label>
      </div>
 
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleNewUserClick}
        >
          New User? Click Here
        </button>
      </div>
    </form>
  </div>
  </div>
  </div>
);
}

export default Login;
