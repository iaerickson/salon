import React, { Component } from "react";
import FormInput from "../FormInput";
import API from "../../utils/API";
//Break up inputs into a component, use hooks to change state/value

//  TODO
//  1. Validator
//		A) Email
//		B) Password
//		C) Confirm Pass
//
//	2. Fix Col sizes/lengths of inputs
//
//	3. On Submit Event
//
//	4. Link Submit with Routes
//
//	5. Make State Dropdown
//
//	6. Format Bday Input

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "", confirm: "", error: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (event) => {
		alert("A Name was submitted: " + this.state.value);
		event.preventDefault();

		API.createNewUser(this.state)
			.then((res) => {
				if (res.data.status === "error") {
					throw new Error(res.data.message);
				}
				this.setState({
					email: this.state.email,
					password: this.state.password,
					// loggedIn: true,
				});
			})
			.catch((err) => this.setState({ error: err.message }));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='form-group'>
					<label>Email:</label>
					<FormInput type='email' id='email' />
				</div>
				<div className='form-group'>
					<label>Password:</label>
					<FormInput type='password' id='password' />
				</div>
				<div className='form-group'>
					<label>Confirm Password:</label>
					<FormInput type='password' id='confirmPass' />
				</div>
				<div className='form-group form-row'>
					<div className='col'>
						<label>First Name:</label>
						<FormInput type='text' id='firstName' />
					</div>
					<div className='col'>
						<label>Last Name:</label>
						<FormInput type='text' id='lastName' />
					</div>
					<div className='col'>
						<label>Pronouns:</label>
						<FormInput type='text' id='pronouns' />
					</div>
				</div>
				<div className='form-group form-row'>
					<div className='col'>
						<label>Birthday:</label>
						<FormInput type='text' id='bday' />
					</div>
					<div className='col'>
						<label>Phone Number:</label>
						<FormInput type='text' id='phone' />
					</div>
				</div>

				<div className='form-group'>
					<div className='form-row'>
						<div className='col'>
							<label>Address 1:</label>
							<FormInput type='text' id='addressOne' />
						</div>
						<div className='col'>
							<label>Address 2:</label>
							<FormInput type='text' id='addressTwo' />
						</div>
					</div>
					<div className='form-row'>
						<div className='col'>
							<label>City:</label>
							<FormInput type='text' id='city' />
						</div>
						<div className='col'>
							<label>State:</label>
							<FormInput type='text' id='state' />
						</div>
						<div className='col'>
							<label>Zipcode:</label>
							<FormInput type='text' id='zip' />
						</div>
					</div>
				</div>

				<input type='submit' value='Submit' />
			</form>
		);
	}
}
export default SignUpForm;
