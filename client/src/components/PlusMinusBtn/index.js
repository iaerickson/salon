import React, { useState } from "react";
import "./style.css";

function PlusMinusBtn() {
	const [count, setCount] = useState(0);

	function decreaseCount() {
		setCount((prevCount) => prevCount - 1);
	}

	function increaseCount() {
		setCount((prevCount) => prevCount + 1);
	}

	return (
		<div className='counter'>
			<button onClick={decreaseCount}>-</button>
			<span className='quantity'>{count}</span>
			<button onClick={increaseCount}>+</button>
		</div>
	);
}
export default PlusMinusBtn;
