import React, { useState } from 'react';

const Theme = (WrappedComponent) => {
  return () => {
    const [color, setColor] = useState('black');

    const setBlack = () =>{
        setColor('black');
    } 
    const setWhite = () => {
        setColor('white');
    }
        

    const themeStyle = {
      backgroundColor: color,
      color: color === 'black' ? 'white'  : 'black',
      minHeight: '50vh',
      padding: '20px',
      transition: 'all 0.3s ease'
    };

    return (
      <div style={themeStyle}>
        <WrappedComponent setBlack={setBlack} setWhite={setWhite} />
      </div>
    );
  };
};

export default Theme;
