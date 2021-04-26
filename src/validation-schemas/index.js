import * as yup from 'yup';

export const EMAIL_MAX_LENGTH = 64;

const emailRegexp = /^[a-z0-9\-!#$%&'*.+\/=?^_`{|}~]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi;

const validationsSchema = yup.object().shape({
	name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	nameOfSchool: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	// dateOfBirth: yup.string().required('Обязательно'),
	country: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	teacherPhone: yup.string().typeError('Должен быть номер').required('Обязательно'),
	phone: yup.string().typeError('Должен быть номер').required('Обязательно'),
	teacher: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	employment: yup.string().required('Обязательно'),
	amountOfPatricipants: yup.number().required('Обязательно').min(1, 'От одного участника'),
	nomination: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	fullAge: yup.string().required('Обязательно'),
	formOfPerfomance: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	teacherMail: yup
		.string()
		.matches(emailRegexp, 'Не верный Email')
		.max(EMAIL_MAX_LENGTH, `Должно быть ${EMAIL_MAX_LENGTH} символов или меньше`)
		.min(5, 'Должно быть 5 символов или больше')
		.required('Обязательно')
});

export default validationsSchema;
