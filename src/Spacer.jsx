import React from 'react';

const Spacer = ({ height = '20px', width = '100%' }) => {
  return (
    <div 
      style={{ 
        height: height, 
        width: width 
      }}
    />
  );
};

export default Spacer;