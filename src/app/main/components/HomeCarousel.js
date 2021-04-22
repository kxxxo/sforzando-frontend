import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function HomeCarousel() {
	return (
		<div>
			<Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} legend centerMode>
				<div>
					<img src="assets/images/home-carousel/1.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/2.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/3.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/4.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/5.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/6.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/7.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/8.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/9.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/10.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/11.png" alt="sforzando" />
				</div>
				<div>
					<img src="assets/images/home-carousel/12.png" alt="sforzando" />
				</div>
			</Carousel>
		</div>
	);
}

export default HomeCarousel;
