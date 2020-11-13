import React from "react";

function Card({ icon, title, children }) {
	return (
		<div>
			<div>
				{/* //<img /> */}
				<h5>Item</h5>
				<p>Description</p>
				<p>Price</p>
			</div>
		</div>
	);
}

export default Card;
