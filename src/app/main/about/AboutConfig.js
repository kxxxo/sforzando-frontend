import i18next from 'i18next';
import ru from '../../i18n/ru';
import en from '../../i18n/en';
import ar from '../../i18n/ar';
import tr from '../../i18n/tr';

import AboutPage from './About';
import JudgesPage from './Judges';

i18next.addResourceBundle('en', 'mainApp', en);
i18next.addResourceBundle('tr', 'mainApp', tr);
i18next.addResourceBundle('ar', 'mainApp', ar);
i18next.addResourceBundle('ru', 'mainApp', ru);

const AboutConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/about/sforzando',
			component: AboutPage
		},
		{
			path: '/about/judges',
			component: JudgesPage
		}
	]
};

export default AboutConfig;
