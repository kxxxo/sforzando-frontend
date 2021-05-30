import i18next from 'i18next';
import React from 'react';
import ru from '../../i18n/ru';
import en from '../../i18n/en';
import ar from '../../i18n/ar';
import tr from '../../i18n/tr';

import HomeCarousel from '../components/HomeCarousel';
import HomeCompetition from '../components/HomeCompetitions/HomeCompetitions';


i18next.addResourceBundle('en', 'mainApp', en);
i18next.addResourceBundle('tr', 'mainApp', tr);
i18next.addResourceBundle('ar', 'mainApp', ar);
i18next.addResourceBundle('ru', 'mainApp', ru);

function HomePage() {
	return (
		<>
			<HomeCarousel />
			<HomeCompetition />
		</>
	);
}

export default HomePage;
