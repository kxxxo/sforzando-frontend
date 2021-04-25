import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import ru from './navigation-i18n/ru';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
i18next.addResourceBundle('ru', 'navigation', ru);

const navigationConfig = [
	{
		id: 'home',
		title: 'Home page',
		translate: 'HOME_PAGE',
		type: 'group',
		icon: 'home',
		url: '/home'
	},
	{
		id: 'competition',
		title: 'Competitions',
		translate: 'COMPETITIONS',
		type: 'group',
		icon: 'dvr',
		url: '/competition'
	},
	{
		id: 'competition-result',
		title: 'Competition results',
		translate: 'COMPETITION_RESULTS',
		type: 'group',
		icon: 'leaderboard',
		url: '/results'
	},

	{
		id: 'gallery',
		title: 'Gallery',
		translate: 'GALLERY',
		type: 'group',
		icon: 'collections',
		url: '/gallery'
	},
	{
		id: 'about',
		title: 'About',
		translate: 'ABOUT_US',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'about-sforzando',
				title: 'Sforzando',
				translate: 'SFORZANDO',
				type: 'item',
				icon: 'star_border_purple500',
				url: '/about/sforzando'
			},
			{
				id: 'about-jury',
				title: 'About Jury',
				translate: 'JURY',
				type: 'item',
				icon: 'groups',
				url: '/about/jury'
			},
			{
				id: 'about-contact',
				title: 'Contacts',
				translate: 'CONTACTS',
				type: 'item',
				icon: 'contact_phone',
				url: '/about/contacts'
			}
		]
	}
];

export default navigationConfig;
