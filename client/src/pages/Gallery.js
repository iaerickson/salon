import React, { useState } from "react";
import Container from "../components/Container";
import Carousel from "../components/Carousel";

function Gallery() {
	const [value, onChange] = useState(0);

	return (
		<div>
			<Container>
				<h1>Gallery</h1>
			</Container>
		</div>
	);
}

export default Gallery;
