import React from 'react';

const DisabledOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h2>Please log in to access this page.</h2>
      </div>
    </div>
  );
};

export default DisabledOverlay;
