import styled from 'styled-components';
import { Form } from 'formik';

export const RegistrWrapper = styled(Form)`
	max-height: 80vh;
	overflow: auto;

	.error {
		display: block;
		position: absolute;
		color: red;
		margin-left: 2.5rem;
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
	}

	.toggle-pass-visibility {
		color: red;
	}

	.MuiButtonBase-outlined {
		margin-top: 1rem;
	}

	.MuiFormControl-root {
		margin-bottom: 0.5rem;
		margin-top: 0.3rem;
		width: 100%;
	}

	.fields-container {
		display: flex;
		padding: 58px 40px 0 40px;
	}

	.fields-code-container {
		display: flex;
		flex-direction: column;
	}
	.container-for-text {
		display: flex;
		flex-direction: column;
		margin: 0 0 60px 40px;
	}

	.MuiOutlinedInput-notchedOutline {
		display: none !important;
	}

	.MuiFormControl-root {
		width: 390px !important;
		border-bottom: 1px solid #adadad;
		label:first-of-type {
			display: none !important;
		}
		input:first-of-type {
			font-size: 16px;
			line-height: 160%;
		}
		input:first-of-type:hover {
			::placeholder {
				color: #8c8c8c !important;
			}
		}
		:hover {
			border-bottom: 1px solid #8c8c8c;
		}
	}

	.password-input {
		::placeholder {
			color: #8c8c8c !important;
		}
	}

	.span-title {
		font-size: 16px;
		line-height: 160%;
		color: #556170;
		display: block;
		margin: 20px 0 40px 40px;
	}

	.text-small-span {
		font-size: 14px;
		line-height: 160%;
		color: #020303;
		display: block;
		display: flex;
		margin: 0 3px;
	}

	.text-gray-span {
		color: #828282;
	}

	.text-button-span {
		border-bottom: 1px solid #556170;
		width: 200px;
	}

	.text-button-span:hover {
		cursor: pointer;
		border-bottom: 1px solid #8c8c8c;
		color: #8c8c8c !important;
	}

	.ant-statistic {
		line-height: 0.5;
		margin: 0 3px;
	}

	.ant-statistic-content-value {
		font-size: 14px;
		line-height: 160%;
		color: #828282;
	}
	.fio {
		width: 100%;
	}
`;

export const LinkBackNumber = styled('a')`
	font-size: 16px;
	line-height: 160%;
	color: #020303;
	margin-bottom: 60px;
	:hover {
		color: ${({ theme: { colors } }) => colors.primary.bcHover};
	}
`;

export const BlockLinkBack = styled('div')`
	padding-left: 40px;
	margin-top: 20px;
`;
