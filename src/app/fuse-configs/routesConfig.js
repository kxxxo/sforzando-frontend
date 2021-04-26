import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ErrorConfig from 'app/main/error/ErrorConfig';
import AboutConfig from 'app/main/about/AboutConfig';
import CompetitionConfig from 'app/main/competition/CompetitionConfig';
import HomeConfig from 'app/main/home/HomeConfig';
import GalleryConfig from '../main/gallery/GalleryConfig';
import CompetitionResultsConfig from '../main/competition-results/CompetitionResultsConfig';
import ApplicationConfig from '../main/components/competition-application/Competition-ApplicationConfig';

const routeConfigs = [
	ErrorConfig,
	AboutConfig,
	// CompetitionConfig,
	CompetitionResultsConfig,
	HomeConfig,
	GalleryConfig,
	ApplicationConfig
];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/home" />,
		exact: true
	},
	{
		component: () => <Redirect to="/error/404" />
	}
];

export default routes;
