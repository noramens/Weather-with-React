import React from 'react';

function Input(props) {
  const { city, country, handleCall, setCity, setCountry } = props;

  return (
    <nav className="form">
      <input
        type="text"
        value={city}
        onChange={event => {
          setCity(event.target.value);
        }}
        placeholder="enter city"
        className="input"
      />
      <input
        type="text"
        value={country}
        onChange={event => setCountry(event.target.value)}
        placeholder="enter country"
        className="input"
        style={{ marginRight: '1rem', marginLeft: '1rem' }}
      />
      <button onClick={handleCall} className="check">
        check
      </button>
    </nav>
  );
}

export default Input;
