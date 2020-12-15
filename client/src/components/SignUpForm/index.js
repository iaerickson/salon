import React, { Component } from "react";

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert("A Name was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='form-group'>
					<label>Email:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Password:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Confirm Password:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group form-row'>
					<div className='col'>
						<label>First Name:</label>
						<input
							type='text'
							className='form-control'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
					<div className='col'>
						<label>Last Name:</label>
						<input
							type='text'
							className='form-control'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className='form-group form-row'>
					<div className='col'>
						<label>Pronouns:</label>
						<input
							type='text'
							className='form-control'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
					<div className='col'>
						<label>Birthday:</label>
						<input
							type='text'
							className='form-control'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className='form-group'>
					<label>Address 1:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>Address 2:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>City:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>State:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>Zipcode:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Phone Number:</label>
					<input
						type='text'
						className='form-control'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<input type='submit' value='Submit' />
			</form>
		);
	}
}
export default SignUpForm;
