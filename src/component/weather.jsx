import React from 'react';
import Img from '../assets/cov1.jpg';
class Weather extends React.Component {
	render() {
		const update = this.props.covidUpdateByCountry;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="Card">
							<h1 className="py-3">{this.props.city}</h1>
							<h5 className="py-4">
								<i className={`wi ${this.props.weathericon} display-1`} />
							</h5>

							{this.props.temp_celsius ? (
								<h1 className="py-2">{this.props.temp_celsius}&#8451;</h1>
							) : null}

							{minmaxTemp(this.props.temp_min, this.props.temp_max)}

							<h4 className="py-4">
								{this.props.description.charAt(0).toUpperCase() + this.props.description.slice(1)}
							</h4>
						</div>
					</div>

					<div className="col-md-3 mt-4 ">
						{this.props.country ? (
							<div className="card" style={{ width: '18rem' }}>
								<img src={Img} className="card-img-top " alt="..." />
								<div className="card-body">
									<h5 className="card-title">
										<strong>{update.Country} Stats</strong>
									</h5>
									<h5 className="alert alert-danger">Active cases: {update.Active}</h5>
									<p className="card-text">
										Total Confirmed: {update.Confirmed}
										<br />
										Total Recovered: {update.Recovered}
										<br />
										Total Deaths: {update.Deaths}
									</p>
								</div>
							</div>
						) : (
							<div className="card" style={{ width: '18rem' }}>
								<img src={Img} className="card-img-top " alt="..." />
								<div className="card-body">
									<h5 className="card-title">
										<strong>World Stats</strong>
									</h5>
									<h5 className="alert alert-danger">
										Last 24 hours : {this.props.covid.NewConfirmed}
									</h5>
									<p className="card-text">
										Total Confirmed: {this.props.covid.TotalConfirmed}
										<br />
										Total Recovered: {this.props.covid.TotalRecovered}
										<br />
										Total Deaths: {this.props.covid.TotalDeaths}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
function minmaxTemp(min, max) {
	if (min && max) {
		return (
			<div>
				<h5>
					<span className="px-4">MIN</span>
					<span className="px-4">MAX</span>
				</h5>
				<h3>
					<span className="px-4">{min}&#8451;</span>
					<span className="px-4">{max}&#8451;</span>
				</h3>
			</div>
		);
	}
}
export default Weather;
