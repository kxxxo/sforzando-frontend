import {useTranslation} from 'react-i18next';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';
import axios from 'axios';
import CompetitionCard from './CompetitionCard';
import HttpConfig from '../../../config/HttpConfig';
import i18next from "i18next";


function HomeCompetitions() {
	const {t} = useTranslation('mainApp');

	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(`${HttpConfig.getLast3CompetitionUrl}&lang=${i18next.language}`).then(res => {
			setData(res.data);
		});
	}, []);

	if (!data) {
		return null;
	}

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
		<div>
			<Container fixed className="md:mb-68">
				<Typography variant="h2" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
					{t('COMPETITIONS')}
				</Typography>
				<motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
					{data.map(competition => (
						<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/3 p-12" key={competition.id}>
						<CompetitionCard
							image={HttpConfig.domain + competition.img_url}
							title={competition.title}
							text={competition.text}
						/>
					</motion.div>
					))}
				</motion.div>
				<div style={{ textAlign: 'center', width: '100%', paddingTop: '30px' }} >
					<Button variant="contained" color="primary" href="/competition" role="button">
						{t('ALL_COMPETITIONS')}
					</Button>
				</div>
			</Container>
		</div>
	);
}

export default HomeCompetitions;
