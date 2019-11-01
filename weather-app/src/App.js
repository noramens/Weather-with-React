import React from 'react';
import Input from './Input';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country: '',
      temp: null,
      cityName: null,
      countryName: null,
      minTemp: null,
      maxTemp: null,
      description: null,
      image: null,
      lon: null,
      lat: null
    };

    this.handleCall = this.handleCall.bind(this);
    this.currentLocation = this.currentLocation.bind(this);
  }

  // componentDidMount() {
  //   this.currentLocation();
  // }

  currentLocation = () => {
    const showPosition = position => {
      console.log('longitude : ' + position.coords.longitude + ' latitude: ' + position.coords.latitude);
      this.setState({ lon: position.coords.longitude, lat: position.coords.latitude });
    };
    return navigator.geolocation.getCurrentPosition(showPosition);
  };

  calCelsius(temp) {
    return Math.floor(temp - 273.15);
  }

  setCity = city => {
    this.setState({ city: city });
  };

  setCountry = country => {
    this.setState({ country: country });
  };

  handleCall = async e => {
    e.preventDefault();
    const url = await fetch(
      // `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=ae4267c858ee38a20b390a044fabdd14`
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=ae4267c858ee38a20b390a044fabdd14`
    );
    const resp = await url.json();

    const {
      main: { temp, temp_max, temp_min },
      coord: { lon, lat },
      weather: {
        0: { description, icon }
      },
      sys: { country },
      name
    } = resp;

    this.setState({
      city: ' ',
      country: ' ',
      temp: this.calCelsius(temp),
      cityName: name,
      countryName: country,
      minTemp: this.calCelsius(temp_min),
      maxTemp: this.calCelsius(temp_max),
      description: description,
      image: icon,
      lon: lon,
      lat: lat
    });

    console.log(resp);
    console.log(temp);
    console.log(temp_max);
    console.log(temp_min);
    console.log(description);
    console.log(name);
    console.log(country);
  };

  render() {
    return (
      <>
        {/* <div>
          {this.currentLocation()} {this.state.lon} {this.state.lat}{' '}
        </div> */}

        <Input
          city={this.state.city}
          country={this.state.country}
          handleCall={this.handleCall}
          setCity={this.setCity}
          setCountry={this.setCountry}
        />

        <main className="status">
          {this.state.image && (
            <img
              src={`http://openweathermap.org/img/w/${this.state.image}.png`}
              alt="weather icon"
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
          )}

          {this.cityName && (
            <div className="name">
              {this.state.cityName}, {this.state.countryName}
            </div>
          )}

          {this.state.temp && (
            <div style={{ textAlign: 'center', marginTop: '5rem' }}>
              {' '}
              <h1>{this.state.temp}&deg;C</h1>{' '}
            </div>
          )}

          <div className="temp">
            {this.state.minTemp && (
              <div>
                <h1>{this.state.minTemp}&deg;C</h1>
              </div>
            )}
            {this.state.maxTemp && (
              <div>
                {' '}
                <h1>{this.state.maxTemp}&deg;C</h1>
              </div>
            )}
          </div>

          {this.state.description && <div className="description">{this.state.description}</div>}
        </main>
      </>
    );
  }
}

export default App;
