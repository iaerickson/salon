import React from "react";

function Carousel() {
	return (
		<div>
			<div
				id='carouselExampleIndicators'
				className='carousel slide'
				data-ride='carousel'
			>
				<ol className='carousel-indicators'>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='0'
						className='active'
					></li>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='1'
						className='active'
					></li>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='2'
						className='active'
					></li>
				</ol>
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
				<a
					className='carousel-control-prev'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Next</span>
				</a>
			</div>
		</div>
	);
}

export default Carousel;
