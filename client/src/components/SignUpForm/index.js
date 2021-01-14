import React, { Component } from "react";
import FormInput from "../FormInput";
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
					<FormInput
						type='email'
						id='email'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Password:</label>
					<FormInput
						type='password'
						id='password'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Confirm Password:</label>
					<FormInput
						type='password'
						id='confirmPass'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group form-row'>
					<div className='col'>
						<label>First Name:</label>
						<FormInput
							type='text'
							id='firstName'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
					<div className='col'>
						<label>Last Name:</label>
						<FormInput
							type='text'
							id='lastName'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className='form-group form-row'>
					<div className='col'>
						<label>Pronouns:</label>
						<FormInput
							type='text'
							id='pronouns'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
					<div className='col'>
						<label>Birthday:</label>
						<FormInput
							type='text'
							id='bDay'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className='form-group'>
					<label>Address 1:</label>
					<FormInput
						type='text'
						id='addressOne'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>Address 2:</label>
					<FormInput
						type='text'
						id='addressTwo'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>City:</label>
					<FormInput
						type='text'
						id='city'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>State:</label>
					<FormInput
						type='text'
						id='state'
						value={this.state.value}
						onChange={this.handleChange}
					/>

					<label>Zipcode:</label>
					<FormInput
						type='text'
						id='zip'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Phone Number:</label>
					<FormInput
						type='text'
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
