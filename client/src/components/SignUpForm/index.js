import React, { Component } from "react";
//Break up inputs into a component, use hooks to change state/value
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
						id='email'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Password:</label>
					<input
						type='text'
						className='form-control'
						id='password'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Confirm Password:</label>
					<input
						type='text'
						className='form-control'
						id='confirmPass'
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
							id='firstName'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
					<div className='col'>
						<label>Last Name:</label>
						<input
							type='text'
							className='form-control'
							id='lastName'
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
							id='pronouns'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
					<div className='col'>
						<label>Birthday:</label>
						<input
							type='text'
							className='form-control'
							id='bDay'
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
						id='addressOne'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>Address 2:</label>
					<input
						type='text'
						className='form-control'
						id='addressTwo'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>City:</label>
					<input
						type='text'
						className='form-control'
						id='city'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>State:</label>
					<input
						type='text'
						className='form-control'
						id='state'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>Zipcode:</label>
					<input
						type='text'
						className='form-control'
						id='zip'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Phone Number:</label>
					<input
						type='text'
						className='form-control'
						id='phone'
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
