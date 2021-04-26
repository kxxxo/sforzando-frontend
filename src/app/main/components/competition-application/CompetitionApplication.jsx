import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Formik, Field, ErrorMessage } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import queryString from 'query-string';
import axios from "axios";


import {
	TextField,
	FormControlLabel,
	FormControl,
	RadioGroup,
	Radio,
	Checkbox,
	FormGroup,
	MenuItem
} from '@material-ui/core';
import validationsSchema from '../../../../validation-schemas';
import './styles.css';
import HttpConfig from "../../../config/HttpConfig";

function CompetitionApplication(props) {
	const params = queryString.parse(props.location.search)

	const useStyles = makeStyles(theme => ({
		root: {
			background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${
				theme.palette.primary.dark
			} 80%)`
		},
		divider: {
			backgroundColor: theme.palette.divider
		},
		container: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column'
		},
		fio: {
			width: '100%',
			borderBottom: 'none'
		},
		threesome: {
			display: 'flex',
			width: '100%'
		},

		fieldError: {
			borderBottom: `1px solid red !important`,
			'&:hover': {
				borderBottom: '1px solid #8c8c8c!important'
			}
		},
		styledInputs: {
			width: '90%',
			'&:first-of-type': {
				fontSize: '16px',
				lineHeight: '160%'
			},
			'&:first-of-type:hover': {
				'&:placeholder': {
					color: '#8c8c8c'
				}
			},
			'&:hover': {
				borderBottom: `1px solid #8c8c8c !important`
			}
		}
	}));

	const currencies = [
		{
			value: 'full-time',
			label: 'Очное'
		},
		{
			value: 'part-time',
			label: 'Заочное'
		}
	];

	const classes = useStyles();


	return (
		<div className={clsx(classes.root, 'flex-grow flex-shrink-0 p-0 sm:p-64 print:p-0 overflow-auto')}>
			<motion.div
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ bounceDamping: 0 }}
			>
				<Card className="mx-auto w-xl print:w-full print:shadow-none rounded-none sm:rounded-20">
					<CardContent className="print:p-0" style={{paddingTop: "32px"}}>
						<div className={classes.container}>
							<h1 className="second-page__title">Подать заявку на участие</h1>
							<Formik
								initialValues={{
									picked: '',
									name: '',
									nomination: '',
									nameOfSchool: '',
									country: '',
									formOfPerfomance: '',
									checked: [],
									phone: '',
									teacher: '',
									teacherPhone: '',
									teacherMail: '',
									concertMaester: '',
									concertMaesterPhone: '',
									concertMaesterMail: '',
									parents: '',
									parentsPhone: '',
									parentsMail: '',
									comment: '',
									fullAge: '',
									employment: '',
									amountOfPatricipants: ''
								}}
								validateOnBlur

								onSubmit={values => {
									axios({
										method: 'post',
										url: HttpConfig.createApplicationUrl,
										data: {...{competition_id:params.id},...values},
										headers: {
											'Content-Type': 'application/json; charset=UTF-8',
											"Access-Control-Allow-Origin": "*"
										}
									}).then((response) => {
										window.location = "/competition/requisites"
									}, (error) => {
										console.log(error);
										alert("Возникла ошибка. Попробуйте отправить заявку еще раз")
									});
								}}
								validateOnChange={e=>{
								}}

								validationSchema={validationsSchema}

								// onSubmit={async values => {
								// 	await new Promise(r => setTimeout(r, 500));
								// 	alert(JSON.stringify(values, null, 2));
								// }}
							>
								{({
									  values,
									  errors,
									  touched,
									  handleChange,
									  handleBlur,
									  isValid,
									  handleSubmit,
									  dirty
								  }) => (
									//Форма общая

									<Container fixed style={{maxWidth:'670px'}}>
										<div className="row">
											<TextField
												margin="normal"
												helperText="Вид выступления"
												select
												name="employment"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.employment}
												className="input"
												inputProps={{
													style:{
														backgroundColor:"#ff000"
													}
												}}
											>
												{currencies.map(option => (
													<MenuItem key={option.value} value={option.value}>
														{option.label}
													</MenuItem>
												))}
											</TextField>
											<ErrorMessage name="employment" component="p" className="error" />

											<TextField
												margin="normal"
												className="input"
												helperText="Участников"
												type="number"
												name="amountOfPatricipants"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.amountOfPatricipants}
											/>
											<ErrorMessage
												name="amountOfPatricipants"
												component="p"
												className="error"
											/>

										</div>
										{/*Номинация/ Направление*/}
										<div className={classes.fio}>
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												placeholder="Номинация - направление (С уточнением номинации!)"
												className="input"
												type="text"
												name="nomination"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.nomination}
											/>

											<ErrorMessage name="nomination" component="p" className="error" />
										</div>
										{/* Форма ФИО */}
										<div className={classes.fio}>
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												placeholder="ФИО исполнителя/ Название коллектива (по данной информации будет заполняться диплом)"
												className="input"
												type="text"
												name="name"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.name}
											/>

											<ErrorMessage name="name" component="p" className="error" />
										</div>
										<div className="row">
											{/* Форма даты рождения */}
											<div className="second-page__dateOfBirth">
												<TextField
													size="medium"
													margin="normal"
													placeholder="Возрастная группа и сколько полных лет"
													className="input"
													type="text"
													name="fullAge"
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.fullAge}
												/>

												<ErrorMessage name="fullAge" component="p" className="error" />
											</div>
											{/*  ОВЗ */}
											<div className="second-page__ovz">
												<FormControl >
													<RadioGroup
														className="block"
														aria-label="gender"
														name="picked"
														value={values.picked}
														onChange={handleChange}
													>
														<FormControlLabel
															control={<Radio
																value="OVZ"
																onChange={handleChange}
																color="primary"
															/>}
															name="picked"
															value="ОВЗ"
															label="ОВЗ"
														/>
														<FormControlLabel
															control={
																<Radio
																	value="Нет льгот"
																	onChange={handleChange}
																	color="primary"
																/>
															}
															name="picked"
															value="Нет льгот"
															label="Нет льгот"
														/>
														<FormControlLabel
															control={
																<Radio
																	value="Многодетная семья"
																	onChange={handleChange}
																	color="primary"
																/>
															}
															name="picked"
															value="Многодетная семья"
															label="Многодетная семья"
														/>
														<FormControlLabel
															control={<Radio
																value="Сирота"
																onChange={handleChange}
																color="primary"
															/>}
															name="picked"
															value="Сирота"
															label="Сирота"
														/>
													</RadioGroup>
												</FormControl>
											</div>
										</div>
										{/* Форма образовательного учреждения */}
										<div className="second-page__nameOfSchool">
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												placeholder="Образовательное учреждение (Писать полностью!)"
												className="input"
												type="text"
												name="nameOfSchool"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.nameOfSchool}
											/>

											<ErrorMessage name="nameOfSchool" component="p" className="error" />
										</div>
										<div className="row">
											{/* Город */}
											<div className="second-page__country">
												<TextField
													id="filled-basic"
													size="medium"
													margin="normal"
													placeholder="Город"
													className="input"
													type="text"
													name="country"
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.country}
												/>

												<ErrorMessage name="country" component="p" className="error" />
											</div>

											{/* Телефон для связи */}
											<div className="second-page__phone">
												<TextField
													id="filled-basic"
													size="medium"
													margin="normal"
													placeholder="Телефон для связи"
													className="input"
													type="text"
													name="phone"
													onBlur={handleBlur}
													onChange={handleChange}
													value={values.phone}
												/>

												<ErrorMessage name="phone" component="p" className="error" />
											</div>
										</div>

										{/*  Форма исполнения */}
										<div className={classes.fio}>
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												placeholder="Программа выступления с указанием инициалов авторов произведений,точного хронометража"
												className="input"
												type="text"
												name="formOfPerfomance"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.formOfPerfomance}
												multiline
												rows={4}
											/>

											<ErrorMessage name="formOfPerfomance" component="p" className="error" />
										</div>

										<h2 className="second-page__title">Преподаватель</h2>
										<div className="second-page__teacher">
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												rows="3"
												placeholder=" Преподаватель"
												className="height-input"
												type="text"
												name="teacher"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.teacher}
											/>

											<ErrorMessage name="teacher" component="p" className="error" />
										</div>

										<div className="row">
											{/*Телефон преподавателя*/}
											<TextField
												className="input"
												size="medium"
												type="text"
												value={values.teacherPhone}
												onBlur={handleBlur}
												onChange={handleChange}
												name="teacherPhone"
												placeholder="Телефон"
											/>
											<ErrorMessage name="teacherPhone" component="p" className="error" />
											{/*Email преподавателя*/}
											<TextField
												className="input"
												size="medium"
												type="text"
												value={values.teacherMail}
												onChange={handleChange}
												onBlur={handleBlur}
												name="teacherMail"
												placeholder="Email"
											/>

											<ErrorMessage name="teacherMail" component="span" className="error" />
										</div>
										<h2 className="second-page__title">Концертмейстер</h2>
										<div className="second-page__teacher">
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												rows="3"
												placeholder="Концертмейстер (если есть)"
												className="height-input"
												type="text"
												name="concertMaester"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.concertMaester}
											/>
										</div>

										<div className="row">
											{/*Телефон преподавателя*/}
											<TextField
												className="input"
												size="medium"
												type="text"
												value={values.concertMaesterPhone}
												onBlur={handleBlur}
												onChange={handleChange}
												name="concertMaesterPhone"
												placeholder="Телефон"
											/>

											{/*Email преподавателя*/}
											<TextField
												className="input"
												size="medium"
												type="text"
												value={values.concertMaesterMail}
												onChange={handleChange}
												onBlur={handleBlur}
												name="concertMaesterMail"
												placeholder="Email"
											/>
										</div>
										<h2 className="second-page__title">Родитель</h2>
										<div className="second-page__teacher">
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												rows="3"
												placeholder="Родитель (Если есть)"
												className="height-input"
												type="text"
												name="parents"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.parents}
											/>
										</div>

										<div className="row">
											{/*Телефон преподавателя*/}
											<TextField
												className="input"
												size="medium"
												type="text"
												value={values.parentsPhone}
												onBlur={handleBlur}
												onChange={handleChange}
												name="parentsPhone"
												placeholder="Телефон"
											/>
											{/*Email преподавателя*/}
											<TextField
												className="input"
												size="medium"
												type="text"
												value={values.parentsMail}
												onChange={handleChange}
												onBlur={handleBlur}
												name="parentsMail"
												placeholder="Email"
											/>
										</div>

										{/*  Комментарий */}
										<div className="second-page__comment">
											<TextField
												id="filled-basic"
												size="medium"
												margin="normal"
												placeholder="Комментарий"
												className="height-input"
												type="text"
												name="comment"
												onBlur={handleBlur}
												onChange={handleChange}
												multiline
												rows={4}
												value={values.comment}
											/>
										</div>

										<div className="button-send-container" style={{textAlign:'center'}}>
											<Button
												className="second-page__button"
												variant="contained"
												color="primary"
												disabled={!isValid && !dirty}
												onClick={handleSubmit}
												type="submit"
											>
												Отправить{' '}
											</Button>
										</div>
									</Container>
								)}
							</Formik>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}

export default CompetitionApplication;
