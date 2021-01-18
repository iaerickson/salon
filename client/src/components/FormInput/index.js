import React, { useState } from "react";

function FormInput(props) {
	const [value, setValue] = useState("");

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<div>
			<input
				type={props.type}
				className='form-control'
				id={props.id}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
export default FormInput;
