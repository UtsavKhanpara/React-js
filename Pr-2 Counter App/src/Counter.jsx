import React from 'react';

const Counter = ({ no, inc, dec, reset }) => {
  const cardStyle = {
    textAlign: 'center',
    padding: '10px',
    marginTop:"30px",
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    width: '320px',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.11)',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const countStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '15px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    backgroundColor:"black",
    transition: '0.3s',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor:"gray",
    cursor: 'not-allowed',
  };

  const resetStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
  };

  return (
    <div style={cardStyle}>
      <h1 style={titleStyle}>Counter App</h1>
      <h2 style={countStyle}>Count: {no}</h2>
      <div style={buttonContainerStyle}>
        <input type="button" onClick={() => dec()} value="-" style={no > 0 ? buttonStyle : disabledButtonStyle} disabled={no === 0} />
        <input type="button" onClick={() => reset()} value="reset" style={no > 0 ? resetStyle : disabledButtonStyle} disabled={no === 0} />
        <input type="button" onClick={() => inc()} value="+" style={buttonStyle} />
      </div>
    </div>
  );
};

export default Counter;
