import CompetitionApplication from './CompetitionApplication';
import ListPage from '../../competition/List';
import ApplyPage from '../../competition/Apply';

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
			path: '/competition',
			component: ListPage
		}
	]
};

export default ApplicationConfig;
