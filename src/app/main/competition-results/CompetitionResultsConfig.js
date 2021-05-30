import i18next from 'i18next';
import ru from '../../i18n/ru';
import en from '../../i18n/en';
import ar from '../../i18n/ar';
import tr from '../../i18n/tr';
import ResultsPage from './Results';

i18next.addResourceBundle('en', 'mainApp', en);
i18next.addResourceBundle('tr', 'mainApp', tr);
i18next.addResourceBundle('ar', 'mainApp', ar);
i18next.addResourceBundle('ru', 'mainApp', ru);

const CompetitionResultsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/results',
			component: ResultsPage
		}
	]
};

export default CompetitionResultsConfig;
