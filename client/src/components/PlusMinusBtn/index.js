import React from "react";
import "./style.css";

//Need to implement logic
function PlusMinusBtn() {
	return (
		<div class='input-group plus-minus-input'>
			<div class='input-group-button'>
				<button
					type='button'
					class='button hollow circle'
					data-quantity='minus'
					data-field='quantity'
				>
					<i class='fa fa-minus' aria-hidden='true'></i>
				</button>
			</div>
			<input
				class='input-group-field'
				type='number'
				name='quantity'
				value='0'
			/>
			<div class='input-group-button'>
				<button
					type='button'
					class='button hollow circle'
					data-quantity='plus'
					data-field='quantity'
				>
					<i class='fa fa-plus' aria-hidden='true'></i>
				</button>
			</div>
		</div>
	);
}
export default PlusMinusBtn;