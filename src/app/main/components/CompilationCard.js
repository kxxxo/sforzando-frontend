import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { motion } from "framer-motion";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


function CompilationCard() {
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
		<Card key="1" className="mb-32 overflow-hidden rounded-16 shadow">
			<CardHeader
				title={
					<span className="flex">
						<Typography className="font-normal" color="primary" paragraph={false}>
							Международная музыкальная премия SFORZANDO
						</Typography>
					</span>
				}
				subheader="22.05.2021"
			/>

			<CardContent className="py-0">
				<motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
					<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
						<img src="assets/images/demo-content/1.jpg" alt="post" className="rounded-8" style={{objectFit:"cover"}}/>
					</motion.div>
					<motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-2/3 p-12">
						<Typography component="p" className="mb-16">
							💕Дорогие друзья!💕<br/>
							<br/>
							🎉РОЗЫГРЫШ!🎉 для всех!<br/>
							<br/>
							🥁Разыгрываем СЕРТИФИКАТЫ на участие<br/>
							<br/>
							в Международной Музыкальной Премии SFORZANDO‼<br/>
							<br/>
							которая состоится 22-23 мая 2021 года<br/>
							в ОЧНОЙ и ЗАОЧНОЙ формах участия! ✨<br/>
							<br/>
							<br/>
							🎁1 место – *БЕСПЛАТНОЕ участие в<br/>
							ОЧНОМ конкурсе<br/>
							🎁2 место – *БЕСПЛАТНОЕ участие в ЗАОЧНОМ конкурсе<br/>
							🎁3 место - *СКИДКА на участие 50% в ОЧНОМ конкурсе<br/>
							🎁4 место - *СКИДКА на участие 50% в ЗАОЧНОМ конкурсе<br/>
							🎁5 место - *СКИДКА на участие 30% в ОЧНОМ конкурсе<br/>
							🎁6 место - *СКИДКА на участие 30% в ЗАОЧНОМ конкурсе<br/>
							🎁7 место - *СКИДКА на участие 20% в ОЧНОМ конкурсе<br/>
							🎁8 место - *СКИДКА на участие 20% в ЗАОЧНОМ конкурсе<br/>
							🎁9 место - *СКИДКА на участие 10% в ОЧНОМ конкурсе<br/>
							🎁10 место - * СКИДКА на участие 10% в ЗАОЧНОМ конкурсе<br/>
							<br/>
							*⚡Скидка распространяется на один конкурсный номер ТОЛЬКО для Международной Музыкальной премии SFORZANDO"!<br/>
							<br/>
							*⚡Скидки НЕ СУММИРУЮТСЯ.<br/>
							<br/>
							💥Условия участия просты:<br/>
							🎈Быть участником нашей группы https://vk.com/sforzandofond<br/>
							🎈Открыть свою страничку ВКонтакте<br/>
							🎈Поставить в комментариях + (чтобы не возникла путаница, порядковый номер Вам присвоят администраторы группы)<br/>
							🎈Сделать репост этой записи<br/>
							📌закрепить ее на стене до 💥 14 мая<br/>
							2021 года до подведения итогов<br/>
							<br/>
							💥14 мая 2021 года с помощью генератора случайных чисел мы определим победителей! (время розыгрыша может быть любое удобное для организаторов)<br/>
							<br/>
							<br/>
							💥 Желаем удачи!💥<br/>
							<br/>
							Подписывайтесь на нашу страничку в инстаграм и узнавайте обо всех конкурсах, фестивалях и концертах первыми! https://www.instagram.com/sforzando_fond/<br/>
							<br/>
							Подписывайтесь на нашу страничку в ВК и будьте в курсе всех проектов! https://vk.com/sforzandofond 😊😊😊
						</Typography>
					</motion.div>
				</motion.div>

			</CardContent>
			<CardActions disableSpacing className="px-16 pb-16" >
				<Button variant="contained" color="primary" size="small" style={{margin:"auto"}}>
					Участвовать
				</Button>
			</CardActions>
		</Card>
	);
}

export default CompilationCard;
