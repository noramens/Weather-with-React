import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			city: '',
			country: ''
		};

		this.handleCall = this.handleCall.bind(this);
	}

	handleCall = async (e) => {
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
			<form onSubmit={this.handleCall}>
				<input
					type='text'
					value={this.state.city}
					onChange={(event) => this.setState({ city: event.target.value })}
					placeholder='enter city'
				/>
				<input
					type='text'
					value={this.state.country}
					onChange={(event) => this.setState({ country: event.target.value })}
					placeholder='enter country'
				/>
				<button>check</button>
				<div>weather app</div>
			</form>
		);
	}
}

export default App;
