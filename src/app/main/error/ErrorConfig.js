import Error404 from './Error404';

const ErrorConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/error/404',
			component: Error404
		}
	]
};

export default ErrorConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/
