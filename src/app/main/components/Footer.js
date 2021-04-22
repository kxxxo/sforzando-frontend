import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import './footer.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faMapMarker, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Footer() {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};
	const item = {
		hidden: {opacity: 0, y: 20},
		show: {opacity: 1, y: 0}
	};

	return (
		<div className="footer">
			<div className="footer">
				<div className="inner-footer">

					<div className="footer-items">
						<h1>SFORZANDO</h1>
						<p>Региональный Общественный Благотворительный фонд развития исполнительского искусства РТ</p>
					</div>


					<div className="footer-items">
						<h3>Contact us</h3>
						<div className="border1"></div>
						<ul>
							<li><FontAwesomeIcon icon={faMapMarker} size="1x"/>&nbsp; Россия, г. Казань, ул. Чехова д.51 кв. 65</li>
							<li><FontAwesomeIcon icon={faPhone} size="1x"/>&nbsp; <a href="tel:+79534828494">+7 (953) 482-84-94</a>, <a href="tel:+79003289926">+7 (900) 328-99-26</a> </li>
							<li><FontAwesomeIcon icon={faEnvelope} size="1x"/>&nbsp; <a href="mailto:sforzandofond@mail.ru">sforzandofond@mail.ru</a></li>
						</ul>

						<div className="social-media">
							<a href="https://vk.com/sforzandofond" >
									<FontAwesomeIcon icon={faVk} size="2x"/>
							</a>
							<a href="https://instagram.com/sforzando_fond?igshid=51y4h7011in">
									<FontAwesomeIcon icon={faInstagram} size="2x"/>
							</a>
						</div>
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
