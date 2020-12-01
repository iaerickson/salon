import React from "react";
import "./productCard.css";

function ProductCard(props) {
	return (
		<div className='card'>
			<div>
				<img src={props.img} className='card-img-top' />
				<h3>{props.item}</h3>
				<p>{props.desc}</p>
				<p>{props.price}</p>
			</div>
		</div>
	);
}

export default ProductCard;
