import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SignUpForm from "../components/SignUpForm";

// TODO
//
// Fix " " after here
// OR
// Get better styling for link

class SignUp extends Component {
	render() {
		return (
			<div>
				<Container>
					<h1>Sign Up</h1>
					<p>
						Returning Customer? Click <Link to='/login'>here </Link>
						to login
					</p>
					<SignUpForm />
				</Container>
			</div>
		);
	}
}

export default SignUp;
