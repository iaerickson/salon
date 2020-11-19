import React from "react";
import "./card.css";

function Card({ icon, title, children }) {
	return (
		<div>
			<div className='card'>
				{/* //<img /> */}
				<h5>Item</h5>
				<p>Description</p>
				<p>Price</p>
			</div>
		</div>
	);
}

export default Card;
