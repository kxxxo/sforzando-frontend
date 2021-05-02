import CompetitionApplication from './CompetitionApplication';
import ListPage from '../../competition/List';
import ApplyPage from '../../competition/Apply';
import RequisitesPage from '../../competition/Requisites';

const ApplicationConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/competition/apply',
			component: ApplyPage
		},
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
