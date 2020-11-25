import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

class SignUp extends Component {
	render() {
		return (
			<div>
				<Container>
					<h1>Sign Up</h1>
					<form>
						<h4>Email</h4>
						<input></input>
						<br />
						<h4>Password</h4>
						<input></input>
						<br />
						<h4>Confirm Password</h4>
						<input></input>
						<br />
						<button>Sign Up</button>
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
					</form>
				</Container>
			</div>
		);
	}
}

export default SignUp;
