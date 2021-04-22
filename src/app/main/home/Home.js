import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeCompilation from '../components/HomeCompilations';

function HomePage() {
	return (
		<React.Fragment>
			<HomeCarousel />
			<HomeCompilation />
		</React.Fragment>
	);
}

export default HomePage;
