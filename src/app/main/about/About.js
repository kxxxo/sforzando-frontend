import {useTranslation} from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import clsx from "clsx";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from "react";

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`
	},
	divider: {
		backgroundColor: theme.palette.divider
	}
}));

function AboutPage() {
	const {t} = useTranslation('mainApp');

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
										{t('SFORZANDO_ABOUT_1')}
										<br/><br/>
										{t('SFORZANDO_ABOUT_2')}
										<br/><br/>
										{t('SFORZANDO_ABOUT_3')}
										<br/><br/>
										{t('SFORZANDO_ABOUT_4')}
										<br/><br/>
										{t('SFORZANDO_ABOUT_5')}
									</Typography>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}

export default AboutPage;
