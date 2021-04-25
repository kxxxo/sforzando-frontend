import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import clsx from "clsx";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`
	},
	divider: {
		backgroundColor: theme.palette.divider
	}
}));

function AboutPage() {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0 overflow-auto')}>
			<motion.div
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ bounceDamping: 0 }}
			>
				<Card className="mx-auto w-xl print:w-full print:shadow-none rounded-none sm:rounded-20">
					<CardContent className="p-88 print:p-0">
						<div className="flex flex-row justify-between items-start">
							<div className="flex flex-col">
								<div className="flex items-center mb-80 print:mb-0">
									<img
										className="w-160 print:w-60"
										src="assets/images/logos/dove.svg"
										alt="logo"
									/>

									<div className={clsx(classes.divider, 'mx-48 w-px h-128 print:mx-16')} />

									<Typography color="textSecondary">
										Региональный Общественный Благотворительный фонд развития исполнительского искусства РТ «Sforzando» («Усилие»).
										<br/><br/>
										Обладатель Гранта Президента Российской Федерации. Был создан в 2014 году для реализации благотворительных проектов.
										<br/><br/>
										Основателем фонда является Соколов Данияр Мнирович – пианист, лауреат международных конкурсов.
										<br/><br/>
										Целями фонда являются развитие музыкальной культуры республики, популяризация классической музыки и поддержка талантливой молодежи, поиск новых молодых звезд классической сцены, помощь в реализации их таланта на мировой сцене и тем самым пропаганда академического музыкального искусства.
									</Typography>
								</div>


							</div>
						</div>

						<div className="mb-32 print:mt-0">
							<Table className="simple">
								<TableBody>
									<TableRow>
										<TableCell>
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												Наименование организации
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												РБОФ «Сфорцандо»
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												ИНН
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												1655259430
											</Typography>
										</TableCell>
									</TableRow>


									<TableRow>
										<TableCell>
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												КПП
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												165501001
											</Typography>
										</TableCell>
									</TableRow>

									<TableRow>
										<TableCell>
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												ОКПО
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												50639606
											</Typography>
										</TableCell>
									</TableRow>

									<TableRow>
										<TableCell>
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												ОКАТО
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												92401367000
											</Typography>
										</TableCell>
									</TableRow>

									<TableRow>
										<TableCell>
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												ОГРН
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-normal"
												variant="subtitle1"
												color="textSecondary"
											>
												1141600001410
											</Typography>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</div>

						<div className="mb-32 flex items-center">
							<div className="flex justify-end items-center w-160 print:w-60">
								<Typography
									variant="h5"
									className="font-light print:text-16"
									color="textSecondary"
								>
									Реквизиты
								</Typography>
							</div>

							<div className={clsx(classes.divider, 'mx-48 w-px h-128 print:mx-16')}/>

							<div >
								<Typography color="textSecondary">
									Наименования банка: АО «ИК Банк»  г.Казань
								</Typography>
								<Typography color="textSecondary">
									ИНН, КПП банка: 1653005038 / 165501001
								</Typography>
								<Typography color="textSecondary">
									БИК банка: 049209767
								</Typography>
								<Typography color="textSecondary">
									Cчет контрагента: 40703810400000000562
								</Typography>
								<Typography color="textSecondary">
									К/с: 30101810900000000767
								</Typography>
							</div>

						</div>



					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}

export default AboutPage;