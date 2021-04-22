import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';

function HomeCompilations() {
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
					Конкурсы
				</Typography>
				<motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
					<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
						<Card style={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									style={{ height: 140 }}
									image="assets/images/demo-content/1.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Международная премия «SFORZANDO»
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Дорогие друзья!<br/><br/>Приглашаем Вас принять участие в Международной
										Музыкальной Премии «SFORZANDO» которая пройдет 22-23 мая 2021 года в ОЧНОЙ И
										ЗАОЧНОЙ ФОРМАХ г. Казань<br/><br/> Подписывайтесь на нашу страничку в инстаграм
										и узнавайте о всех конкурсах, фестивалях и концертах первыми!
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</motion.div>
					<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
						<Card style={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									style={{ height: 140 }}
									image="assets/images/demo-content/2.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Наследие Татарстана
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										<br/>Дорогие друзья!<br/><br/>
										Приглашаем Вас принять участие
										во II Международном конкурсе татарской культуры,
										музыки и искусства им. Н.Г. Жиганова
										"Наследие Татарстана",
										Посвященному 110-летию со дня рождения
										Назиба Гаязовича Жиганова!<br/><br/>
										который пройдет в ОЧНОЙ и ЗАОЧНОЙ форме
										24 апреля в г. Казань!<br/><br/>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</motion.div>
					<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
						<Card style={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									style={{ height: 140 }}
									image="assets/images/demo-content/3.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Татарстан. Республика талантов
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Дорогие друзья!🥰<br/><br/>Приглашаем Вас принять участие<br/>во II
										Республиканском конкурсе <br/>"Татарстан. Республика талантов",<br/>который
										пройдет в очной и заочной формах 17 апреля г. Казань!✨<br/>Подписывайтесь
										на нашу страничку в инстаграм и узнавайте о всех конкурсах, фестивалях и
										концертах первыми!<br/><br/>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</motion.div>
				</motion.div>
				<div style={{ textAlign: 'center', width: '100%', paddingTop: '30px'}}>
					<Button variant="contained" color="primary" disableElevation>
						ВСЕ КОНКУРСЫ
					</Button>
				</div>

			</Container>
		</div>
	);
}

export default HomeCompilations;
