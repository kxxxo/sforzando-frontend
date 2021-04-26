import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { motion } from 'framer-motion';

import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import HttpConfig from "../../config/HttpConfig";

function JudgesPage() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(HttpConfig.getJudgesUrl).then(res => {
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
	}
	const item = {
		hidden: {opacity: 0, y: 20},
		show: {opacity: 1, y: 0}
	}
	const rawText = (txt)=> {
		return {__html: txt};
	}
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16">
			<Container fixed>
				{data.map(judge => (
					<Card className="mb-32 overflow-hidden rounded-16 shadow">
						<CardContent className="py-0">
							<motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
								<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
									<img src={HttpConfig.domain + judge.img_url} alt="post" className="rounded-8"
										 style={{objectFit: "cover"}}/>
								</motion.div>
								<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-2/3 p-36">
									<Typography component="p" className="mb-16">

										<Typography variant="h5" color="primary" component="p">
											{judge.judgeLanguages[0].fio}
										</Typography>
										<br/>

										<div dangerouslySetInnerHTML={rawText(judge.judgeLanguages[0].description)} />
									</Typography>
								</motion.div>
							</motion.div>
						</CardContent>
					</Card>
				))}
			</Container>
		</div>
	);
}

export default JudgesPage;
