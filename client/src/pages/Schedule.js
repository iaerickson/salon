import React, { useState } from "react";
import Container from "../components/Container";
import Calendar from "react-calendar";
import Modal from "../components/Modal";
import "react-calendar/dist/Calendar.css";

function Schedule() {
	const [value, onChange] = useState(new Date());

	return (
		<div>
			<Container>
				<h1>Book Your Appointment Now</h1>
				<Calendar onChange={onChange} value={value} minDate={new Date()} />
				<Modal />
			</Container>
		</div>
	);
}

export default Schedule;
