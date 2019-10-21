import React from 'react';
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
      description: null
    };

    this.handleCall = this.handleCall.bind(this);
  }

  handleCall = async e => {
    e.preventDefault();
    const url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}k&APPID=ae4267c858ee38a20b390a044fabdd14`
    );
    const resp = await url.json();
    const {
      main: { temp }
    } = await resp;

    const {
      main: { temp_max }
    } = await resp;

    const {
      main: { temp_min }
    } = await resp;

    const {
      weather: {
        0: { description }
      }
    } = await resp;

    const {
      sys: { country }
    } = await resp;

    const { name } = await resp;

    this.setState({
      city: ' ',
      country: ' ',
      temp: temp,
      cityName: name,
      countryName: country,
      minTemp: temp_min,
      maxTemp: temp_max,
      description: description
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
        <form onSubmit={this.handleCall} className="form">
          <input
            type="text"
            value={this.state.city}
            onChange={event => this.setState({ city: event.target.value })}
            placeholder="enter city"
            className="input"
          />
          <input
            type="text"
            value={this.state.country}
            onChange={event => this.setState({ country: event.target.value })}
            placeholder="enter country"
            className="input"
            style={{ marginRight: '1rem', marginLeft: '1rem' }}
          />
          <button className="check">check</button>
        </form>

        <div className="status">
          <div className="image">image</div>
          <div className="name">
            {this.state.cityName}, {this.state.countryName}
          </div>
          <div className="temp">
            <div>
              <h1>&deg;{this.state.minTemp}</h1>
            </div>
            <div>
              {' '}
              <h1>&deg; {this.state.maxTemp}</h1>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>{this.state.temp}</div>
          <div className="description">{this.state.description}</div>
        </div>
      </>
    );
  }
}

export default App;
