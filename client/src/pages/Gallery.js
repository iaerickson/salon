import React, { useState } from "react";
import Container from "../components/Container";
import ImageGallery from "react-image-gallery";

function Gallery() {
	const [value, onChange] = useState(0);

	const images = [
		{
			original: "https://picsum.photos/id/1018/1000/600/",
			thumbnail: "https://picsum.photos/id/1018/250/150/",
		},
		{
			original: "https://picsum.photos/id/1015/1000/600/",
			thumbnail: "https://picsum.photos/id/1015/250/150/",
		},
		{
			original: "https://picsum.photos/id/1019/1000/600/",
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
	];

	return (
		<div>
			<Container>
				<h1>Gallery</h1>
				<ImageGallery items={images} />;
			</Container>
		</div>
	);
}

export default Gallery;
