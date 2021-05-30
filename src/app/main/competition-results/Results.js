import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import HttpConfig from '../../config/HttpConfig';
import CompetitionCard from '../competition/CompetitionCard';
import { withTranslation } from 'react-i18next';


function ResultsPage() {
	const [data, setData] = useState(null);
	const CompetitionCardComponent = withTranslation('mainApp')(CompetitionCard)


	useEffect(() => {
		axios.get(HttpConfig.getLast10CompetitionWithResultsUrl).then(res => {
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
						image={HttpConfig.domain + competition.img_url}
						title={competition.competitionLanguages[0].title}
						text={competition.competitionLanguages[0].text}
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

export default ResultsPage;
