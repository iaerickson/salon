import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

class Login extends Component {
	render() {
		return (
			<div>
				<Container>
					<h1>Login</h1>
					<form>
						<h4>Email</h4>
						<input></input>
						<br />
						<h4>Password</h4>
						<input></input>
						<br />
						<br />
						<button>Login</button>
						<p>
							New Guest? Click <Link to='/signup'>here </Link>
							to register
						</p>
					</form>
				</Container>
			</div>
		);
	}
}

export default Login;
