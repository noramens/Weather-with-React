import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      city: '',
      country: ''
    };

    this.handleCall = this.handleCall.bind(this);
  }

  handleCall = async e => {
    e.preventDefault();
    const url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}k&APPID=ae4267c858ee38a20b390a044fabdd14`
    );
    const resp = await url.json();
    this.setState({ city: ' ', country: ' ' });
    console.log(resp);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleCall} className="form">
          <input
            className="input"
            type="text"
            value={this.state.city}
            onChange={event => this.setState({ city: event.target.value })}
            placeholder="enter city"
          />
          <input
            className="input"
            style={{ marginLeft: '1rem', marginRight: '1rem' }}
            type="text"
            value={this.state.country}
            onChange={event => this.setState({ country: event.target.value })}
            placeholder="enter country"
          />
          <div className="check">check weather</div>
        </form>
      </>
    );
  }
}

class Status extends React.Component {
  render() {
    return (
      <div className="status">
        <div className="image">image</div>
        <div className="name">name of city</div>
        <div className="temp">
          <div>
            <h1>&deg;F</h1>
          </div>
          <div>
            {' '}
            <h1>&deg;F</h1>
          </div>
        </div>
        <div className="description">Description</div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Status />
      </div>
    );
  }
}

export default App;
