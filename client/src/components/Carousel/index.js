import React from "react";

function Carousel() {
	return (
		<div>
			<div
				id='carouselExampleSlidesOnly'
				className='carousel slide'
				data-ride='carousel'
			>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							src={require("../../assets/ultimissimo.jpg")}
							className='d-block w-100'
							alt='Ultimissimo'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src={require("../../assets/trim.jpg")}
							className='d-block w-100'
							alt='Trim'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src={require("../../assets/moroccanOil.jpg")}
							className='d-block w-100'
							alt='Moroccan Oil'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
