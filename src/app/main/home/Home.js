import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeCompetition from '../components/HomeCompetitions/HomeCompetitions';

function HomePage() {
	return (
		<React.Fragment>
			<HomeCarousel />
			<HomeCompetition />
		</React.Fragment>
	);
}

export default HomePage;
