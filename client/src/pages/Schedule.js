import React, { useState } from "react";
import Container from "../components/Container";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const disabledRanges = [];

function tileDisabled({ date, view }) {}

function Schedule() {
	const [value, onChange] = useState(new Date());

	return (
		<div>
			<Container>
				<h1>Book Your Appointment Now</h1>
				<Calendar onChange={onChange} value={value} minDate={new Date()} />
			</Container>
		</div>
	);
}

export default Schedule;
