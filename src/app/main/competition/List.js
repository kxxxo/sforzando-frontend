import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import CompetitionCard from './CompetitionCard';
import HttpConfig from '../../config/HttpConfig';
import { withTranslation } from "react-i18next";
import i18next from "i18next";

function ListPage() {
	const [data, setData] = useState(null);
	const CompetitionCardComponent = withTranslation('mainApp')(CompetitionCard)

	useEffect(() => {
		axios.get(`${HttpConfig.getLast10CompetitionUrl}&lang=${i18next.language}`).then(res => {
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
					<CompetitionCardComponent
						key={competition.id}
						id={competition.id}
						image={HttpConfig.domain + competition.img_url}
					 	title={competition.title}
						text={competition.text}
						start_date={competition.start_date}
						is_ended={competition.is_ended}
						result_url={competition.result_url}
						rules_file_url={competition.rules_file_url}
					/>
				))}
			</Container>
		</div>
	);
}

export default ListPage;
