import React from 'react';
import '../styles/form.css';
const Form = (props) => {
	return (
		<div className="container h-100">
			<form onSubmit={props.loadWeather}>
				<div>{props.error ? error() : ''}</div>
				<div className="row">
					<div className="col-md-3 offset-md-2 py-2 ">
						<input type="text" className="form-control" name="city" placeholder="City" autoComplete="off" />
					</div>
					<div className="col-md-3 py-2">
						<input
							type="text"
							className="form-control"
							name="country"
							placeholder="Country"
							autoComplete="off"
						/>
					</div>
					<div className="col-md-3 mt-md-0 text-md-left py-2">
						<button className="btn btn-warning">Get Weather</button>
					</div>
				</div>
			</form>
		</div>
	);
};
const error = (props) => {
	return (
		<div className="alert alert-danger mx-5" role="alert">
			Please Enter City and Country
		</div>
	);
};
export default Form;
