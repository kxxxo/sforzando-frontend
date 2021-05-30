import i18next from 'i18next';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {useTranslation} from 'react-i18next';
import Button from "@material-ui/core/Button";
import ru from '../../i18n/ru';
import en from '../../i18n/en';
import ar from '../../i18n/ar';
import tr from '../../i18n/tr';

i18next.addResourceBundle('en', 'mainApp', en);
i18next.addResourceBundle('tr', 'mainApp', tr);
i18next.addResourceBundle('ar', 'mainApp', ar);
i18next.addResourceBundle('ru', 'mainApp', ru);


function Footer() {
	const {t} = useTranslation('mainApp');
	const container = {
		show: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};
	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	return (
		<div className="footer">
			<div className="footer">
				<div className="inner-footer">
					<div className="footer-items">
						<h1>SFORZANDO</h1>

						<p>{t('FUND_DESCRIPTION')}</p>
					</div>
					<div className="footer-items">
						<h3>{t('CONTACT_US')}</h3>
						<div className="border1"/>
						<ul>
							{/*<li><FontAwesomeIcon icon={faMapMarker} size="1x"/>&nbsp; Россия, г. Казань, ул. Чехова д.51 кв. 65</li>*/}
							<li><FontAwesomeIcon icon={faPhone} size="1x"/>&nbsp;
								<a href="tel:+79534828494">+7 (953) 482-84-94</a> - {t('ADMINISTRATOR')}
							</li>
							<li><FontAwesomeIcon icon={faPhone} size="1x"/>&nbsp;
								<a href="tel:+79003289926">+7 (900) 328-99-26</a> - {t('MAIN_ADMINISTRATOR')}
							</li>
							<li><FontAwesomeIcon icon={faEnvelope} size="1x"/>&nbsp; <a href="mailto:sforzandofond@mail.ru">sforzandofond@mail.ru</a></li>
						</ul>


					</div>
				</div>

				<div className="footer-bottom">
					Made by <a href="https://kxxo.ru">kxxo.ru</a> 2021.
				</div>
			</div>
		</div>
	);
}

export default Footer;
