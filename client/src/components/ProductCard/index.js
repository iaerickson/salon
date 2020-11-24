import React from "react";
import "./productCard.css";

function ProductCard({ img, item, brand, desc, price, children }) {
	return (
		<div className='card'>
			<div>
				<img src={img} className='card-img-top' />
				<h3>{item}</h3>
				<p>{desc}</p>
				<p>{price}</p>
			</div>
		</div>
	);
}

export default ProductCard;
