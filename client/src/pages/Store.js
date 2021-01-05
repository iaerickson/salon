import React, { Component } from "react";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

class Store extends Component {
	//State

	//HandleChanges

	//Render

	render() {
		return (
			<div>
				<Container>
					<h1>Salon Ultra</h1>
					<p>Order any of our goods for pick up</p>
					<div className='row'>
						<div className='col-md'>
							<ProductCard item='Shampoo' desc='Goes on first' price='12.99' />
						</div>
						<div className='col-md'>
							<ProductCard
								item='Conditioner'
								desc='Makes hair silky and smooth'
								price='7.99'
							/>
						</div>
						<div className='col-md'>
							<ProductCard item='Hair Spray' desc='Kills ozone' price='2.99' />
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default Store;
