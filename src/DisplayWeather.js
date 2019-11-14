import React from 'react';

const DisplayWeather = props => {
  return (
    <main className="status">
      {props.image && (
        <img
          src={`http://openweathermap.org/img/w/${props.image}.png`}
          alt="weather icon"
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
      )}

      {props.cityName && (
        <div className="name">
          {props.cityName}, {props.countryName}
        </div>
      )}

      {props.temp && (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          {' '}
          <h1>{props.temp}&deg;C</h1>{' '}
        </div>
      )}

      <div className="temp">
        {props.minTemp && (
          <div>
            <h1>{props.minTemp}&deg;C</h1>
          </div>
        )}
        {props.maxTemp && (
          <div>
            {' '}
            <h1>{props.maxTemp}&deg;C</h1>
          </div>
        )}
      </div>

      {props.description && <div className="description">{props.description}</div>}
    </main>
  );
};

export default DisplayWeather;
