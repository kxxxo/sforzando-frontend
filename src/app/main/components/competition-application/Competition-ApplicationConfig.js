import i18next from 'i18next';
import ru from '../../../i18n/ru';
import en from '../../../i18n/en';
import ar from '../../../i18n/ar';
import tr from '../../../i18n/tr';

import CompetitionApplication from './CompetitionApplication';
import ListPage from '../../competition/List';
import RequisitesPage from '../../competition/Requisites';

i18next.addResourceBundle('en', 'mainApp', en);
i18next.addResourceBundle('tr', 'mainApp', tr);
i18next.addResourceBundle('ar', 'mainApp', ar);
i18next.addResourceBundle('ru', 'mainApp', ru);

const ApplicationConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/competition/application',
			component: CompetitionApplication
		},
		{
			path: '/competition/requisites',
			component: RequisitesPage
		},
		{
			path: '/competition',
			component: ListPage
		}
	]
};

export default ApplicationConfig;
