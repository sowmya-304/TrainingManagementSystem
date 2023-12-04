import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  // Clear session storage to log out the user
  sessionStorage.clear();
  const navigate = useNavigate();

  return (
    <div style={{color:"white"}}>
      Thanks For Using Service
      <button className='btn btn-info' onClick={() => navigate('/LoginRadio')}>
        Click Here to Login Again
      </button>
    </div>
  );
};

export default Logout;
