import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CompetitionCard from "./CompetitionCard";
import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import axios from "axios";
import HttpConfig from "../../config/HttpConfig";

function ListPage() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(HttpConfig.get_last_10_competition_url).then(res => {
			setData(res.data);
		});
	}, []);

	if (!data) {
		return null;
	}



	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16">
			<Container fixed>
				{data.map(competition => (
					<CompetitionCard
						key = {competition.id}
						id = {competition.id}
						image={HttpConfig.domain + competition.img_url}
					 	title={competition.competitionLanguages[0].title}
						text={competition.competitionLanguages[0].text}
						start_date = {competition.start_date }
						is_ended = {competition.is_ended}
						result_url = {competition.result_url}
					/>
				))}
			</Container>
		</div>
	);
}

export default ListPage;
