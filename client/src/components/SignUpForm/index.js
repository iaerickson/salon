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
				<label>
					Email:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Password:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Confirm Password:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					First Name:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Last Name:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Pronouns:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Birthday:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Address 1:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Address 2:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					City:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					State:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Zipcode:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Phone Number:
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		);
	}
}
export default SignUpForm;
