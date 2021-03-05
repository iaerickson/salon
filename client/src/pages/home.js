import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

class Home extends Component {
	//State

	//HandleChanges

	//Render

	render() {
		return (
			<div>
				<Container>
					<h1>Salon Ultra</h1>

					<p>Welcome</p>
					<Link to='/schedule'>
						<button>Schedule an Appointment</button>
					</Link>
				</Container>
			</div>
		);
	}
}

export default Home;
