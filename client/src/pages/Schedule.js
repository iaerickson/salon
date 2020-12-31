import React, { useState } from "react";
import Container from "../components/Container";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Schedule() {
	const [value, onChange] = useState(new Date());
	//State

	//HandleChanges

	//Render

	return (
		<div>
			<Container>
				<h1>Book Your Appointment Now</h1>
				<Calendar onChange={onChange} value={value} />
			</Container>
		</div>
	);
}

export default Schedule;
