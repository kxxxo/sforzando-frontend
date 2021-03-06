// import i18next from 'i18next';
import GalleryPage from './Gallery';
// import en from './i18n/en';
// import tr from './i18n/tr';
// import ar from './i18n/ar';

// i18next.addResourceBundle('en', 'errorPage', en);
// i18next.addResourceBundle('tr', 'errorPage', tr);
// i18next.addResourceBundle('ar', 'errorPage', ar);

const GalleryConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/gallery',
			component: GalleryPage
		}
	]
};

export default GalleryConfig;

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
