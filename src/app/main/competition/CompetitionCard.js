import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HttpConfig from '../../config/HttpConfig';

class CompetitionCard extends Component {
	container = {
		show: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	item = {
		hidden:  {opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	getStartDate() {
		return new Date(this.props.start_datetime).toLocaleDateString();
	}

	rawText() {
		return { __html: this.props.text };
	}

	render() {
		const url = `/competition/application?id=${this.props.id}`;
		return (
			<Card className="mb-32 overflow-hidden rounded-16 shadow">
				<CardContent className="py-0">
					<motion.div className="flex flex-wrap" variants={this.container} initial="hidden" animate="show">
						<motion.div variants={this.item} className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
							<img src={this.props.image} alt="post" className="rounded-8"
								style={{ objectFit: "cover" }}/>
						</motion.div>
						<motion.div variants={this.item} className="widget flex w-full sm:w-1/2 md:w-2/3 p-36">
							<Typography component="p" className="mb-16">
								<Typography variant="h5" color="primary" component="p">
									{this.props.title}
								</Typography>
								<Typography variant="subtitle1" color="primary" component="p">
									{this.props.start_date}
								</Typography>
								<br/>
								<div dangerouslySetInnerHTML={this.rawText()} />
							</Typography>
						</motion.div>
					</motion.div>
				</CardContent>
				<CardActions disableSpacing className="px-16 pb-16">
					{this.props.rules_file_url &&
						<Button variant="contained" color="default" size="large" style={{margin: "auto"}}
								href={HttpConfig.domain + this.props.rules_file_url} role="button">
							Положение конкурса
						</Button>
					}
					{!this.props.is_ended &&
						<Button variant="contained" color="primary" size="large" style={{margin: "auto"}}
								href={url} role="button">
							Участвовать
						</Button>
					}
					{this.props.is_ended && this.props.result_url &&
					<Button variant="contained" color="primary" size="large" style={{margin: "auto"}}
							href={HttpConfig.domain + this.props.result_url} role="button"
							target="_blank"
					>
						Результаты
					</Button>
					}
				</CardActions>
			</Card>
		)
	}
}

export default CompetitionCard;
