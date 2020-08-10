import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import './App.css';
import Weather from './component/weather';
import Form from './component/form';
import axios from 'axios';
const apiKey = '3dc2e5341d47c3ee10eb2daffd3999a8';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			city: undefined,
			country: undefined,
			icon: undefined,
			celsius: undefined,
			temp_max: undefined,
			temp_min: undefined,
			description: '',
			error: false,
			covid: {},
			covidUpdateByCountry: {}
		};

		this.weatherIcon = {
			Thuderstorm: 'wi-thunderstorm',
			Drizzle: 'wi-sleet',
			Rain: 'wi-storm-showers',
			Snow: 'wi-snow',
			Atmosphere: 'wi-fog',
			Clear: 'wi-day-sunny',
			Clouds: 'wi-day-fog'
		};
	}
	calCelsius(temp) {
		let celsius = Math.floor(temp - 273.15);
		return celsius;
	}
	calcCelsius(temp) {
		let celsius = temp - 273.15;
		return celsius.toFixed(1);
	}
	getWeatherIcon(icons, rangeId) {
		switch (true) {
			case rangeId >= 200 && rangeId <= 232:
				this.setState({ icon: icons.Thuderstorm });
				break;
			case rangeId >= 300 && rangeId <= 321:
				this.setState({ icon: icons.Drizzle });
				break;
			case rangeId >= 500 && rangeId <= 531:
				this.setState({ icon: icons.Rain });
				break;
			case rangeId >= 600 && rangeId <= 622:
				this.setState({ icon: icons.Snow });
				break;
			case rangeId >= 701 && rangeId <= 781:
				this.setState({ icon: icons.Atmosphere });
				break;
			case rangeId === 800:
				this.setState({ icon: icons.Clear });
				break;
			case rangeId >= 801 && rangeId <= 804:
				this.setState({ icon: icons.Clouds });
				break;
			default:
				this.setState({ icon: icons.Clouds });
				break;
		}
	}
	componentDidMount() {
		axios.get(`https://api.covid19api.com/summary`).then((response) => {
			this.setState({
				covid: response.data.Global
			});
			// console.log(response.data);
		});
	}
	getCovid() {
		axios.get(`https://api.covid19api.com/dayone/country/${this.state.country}`).then((response) => {
			this.setState({
				covidUpdateByCountry: response.data[response.data.length - 1]
			});
			// console.log(response.data.length);
		});
	}
	getWeather = async (event) => {
		event.preventDefault();
		let e = event.target;
		let city = event.target.elements.city.value;
		let country = event.target.elements.country.value;

		if (city && country) {
			const apiCall = await fetch(
				`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
			);
			const response = await apiCall.json();
			// console.log(response);

			this.setState({
				city: `${response.name},${response.sys.country}`,
				country: response.sys.country,
				celsius: this.calCelsius(response.main.temp),
				temp_max: this.calcCelsius(response.main.temp_max),
				temp_min: this.calcCelsius(response.main.temp_min),
				description: response.weather[0].description,
				error: false
			});
			this.getWeatherIcon(this.weatherIcon, response.weather[0].id);

			// console.log(this.state);
			// console.log(response);

			this.getCovid();
		} else {
			this.setState({ error: true });
		}
		// console.log(e[0].value);
		e[0].value = '';
		e[1].value = '';
	};
	render() {
		return (
			<div className="App">
				<Form loadWeather={this.getWeather} error={this.state.error} />
				<Weather
					city={this.state.city}
					country={this.state.country}
					temp_celsius={this.state.celsius}
					temp_max={this.state.temp_max}
					temp_min={this.state.temp_min}
					description={this.state.description}
					weathericon={this.state.icon}
					covid={this.state.covid}
					covidUpdateByCountry={this.state.covidUpdateByCountry}
				/>
			</div>
		);
	}
}

export default App;
