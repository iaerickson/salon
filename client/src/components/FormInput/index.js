import React, { useState } from "react";

function FormInput(props) {
	// const [count, setCount] = useState(0);

	// handleChange(event) {
	// 	this.setState({ value: event.target.value });
	// }

	return (
		<div>
			<input
				type={props.type}
				className='form-control'
				id={props.id}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
}
export default FormInput;
