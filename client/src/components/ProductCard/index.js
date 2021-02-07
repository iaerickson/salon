import React from "react";
import PlusMinusBtn from "../PlusMinusBtn";
import "./productCard.css";

function ProductCard(props) {
	return (
		<div className='card'>
			<div>
				<img src={props.img} alt='' className='card-img-top' />
				<h3>{props.item}</h3>
				<p>{props.desc}</p>
				<p>{props.price}</p>
			</div>
			<PlusMinusBtn />
			<button>Add to Cart</button>
		</div>
	);
}

export default ProductCard;
