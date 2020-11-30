import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SignUpForm from "../components/SignUpForm";

class SignUp extends Component {
	render() {
		return (
			<div>
				<Container>
					<h1>Sign Up</h1>
					<SignUpForm></SignUpForm>

					<p>
						Returning Customer? Click{" "}
						<Link
							to='/login'
							className={
								window.location.pathname === "/login"
									? "nav-link active"
									: "nav-link"
							}
						>
							Here
						</Link>
						to login
					</p>
				</Container>
			</div>
		);
	}
}

export default SignUp;
