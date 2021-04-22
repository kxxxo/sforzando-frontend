// import i18next from 'i18next';
import AboutPage from './About';
import ContactPage from './Contacts';
import JuryPage from './Jury';

// import en from './i18n/en';
// import tr from './i18n/tr';
// import ar from './i18n/ar';

// i18next.addResourceBundle('en', 'errorPage', en);
// i18next.addResourceBundle('tr', 'errorPage', tr);
// i18next.addResourceBundle('ar', 'errorPage', ar);

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
			path: '/about/contacts',
			component: ContactPage
		},
		{
			path: '/about/jury',
			component: JuryPage
		}
	]
};

export default AboutConfig;

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
