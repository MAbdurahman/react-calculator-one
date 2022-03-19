import styled from 'styled-components';
import { device }from './devices'


export const CalculatorWrapper = styled.div`
display: block;
/* margin: 3em auto; */
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
align-items: center;
max-width: 1140px;
padding-left: 15px;
padding-right: 15px;
margin-left: auto;
margin-right: auto;

@media ${device.tabletLandscape} {
	max-width: 960px;
}
@media ${device.tabletPortrait} {
	max-width:720px;
}
@media ${device.mobileLandscape} {
	max-width: 540px;
}
@media ${device.mobilePortrait} {
	max-width: 300px;
	padding-left: 0;
}
@media ${device.extraSmallMobile} {
	max-width: 300px;

}
`;

export const Container = styled.div`
	position: relative;
	width: 300px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	justify-content: center;
	align-content: center;
	background-color: #808080;
	border-radius: 10px;
	box-shadow: 2px 2px 10px #333;
	cursor: pointer;
`;

export const Screen = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	z-index: 5;
	width: 100%;
	height: 20%;
	padding: 10px;
	grid-column: 1 / -1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: right;
	word-wrap: break-word;
	word-break: break-all;
	background-color: rgba(58, 58, 58, 1);
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom: 2px solid rgb(139, 139, 137);
	cursor: default;
`;

export const PrevScreen = styled.div`
	color: rgba(255, 255, 255, 0.667);
	font-size: 1.125rem;
`;

export const CurrScreen = styled.div`
	color: rgb(255, 255, 255);
	font-size: 1.75rem;
`;

export const ButtonContainer = styled.div`
	height: 375px;
	margin-top: 5.6em;
	display: grid;
	grid-template-areas:
		'add sub mul div'
		'sev eig nin acc'
		'fou fiv six bcc'
		'one two thr equ'
		'pmm zeo dec equ';
`;

export const OperatorButton = styled.button`
	${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
	width: 75px;
	height: 75px;
	text-align: center;
	cursor: pointer;
	font-size: 1.75rem;
	font-weight: 500;
	border: 1px outset white;
	outline: none;
	color: #3a3a3a;
	background-color: rgba(194, 189, 189, 0.75);
	transition: width 2s;
	transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
	&:hover {
		color: #b8bbb7;
		background-color: #5e615c;
	}
`;

export const NumberButton = styled.button`
	${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
	width: 75px;
	height: 75px;
	text-align: center;
	cursor: pointer;
	font-size: 1.6rem;
	border: 1px outset white;
	outline: none;
	color: #3a3a3a;
	background-color: rgba(194, 189, 189, 0.75);
	transition: width 2s;
	transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
	&:hover {
		background-color: rgba(236, 229, 229, 0.9);
	}
`;
export const ClearButton = styled.button`
	${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
	width: 75px;
	height: 75px;
	text-align: center;
	cursor: pointer;
	font-size: 1.6rem;
	border: 1px outset white;
	outline: none;
	color: #3a3a3a;
	background-color: rgba(194, 189, 189, 0.75);
	transition: width 2s;
	transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
	&:hover {
		background-color: #3abca5;
		color: rgb(255, 255, 255);
	}
`;
export const BackButton = styled.button`
	${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
	width: 75px;
	height: 75px;
	text-align: center;
	cursor: pointer;
	font-size: 2.5rem;
	border: 1px outset white;
	outline: none;
	color: #3a3a3a;
	background-color: rgba(194, 189, 189, 0.75);
	transition: width 2s;
	transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
	&:hover {
		background-color: #038069;
		color: rgb(255, 255, 255);
	}
`;

export const EqualButton = styled.button`
	${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
	width: 75px;
	height: 150px;
	font-size: 2.5rem;
	font-weight: 800;
	text-align: center;
	outline: none;
	color: #b8bbb7;
	background-color: #a6611a;
	border: 1px outset white;
	border-bottom-right-radius: 10px;
	cursor: pointer;
	transition: width 2s;
	transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
	&:hover {
		color: rgb(255, 255, 255);
		background-color: #bd6a17;
	}
`;

export const PMinusButton = styled.button`
	${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
	width: 75px;
	height: 75px;
	text-align: center;
	cursor: pointer;
	font-size: 1.75rem;
	font-weight: 500;
	border: 1px outset white;
	outline: none;
	color: #3a3a3a;
	background-color: rgba(194, 189, 189, 0.75);
	border-bottom-left-radius: 10px;
	transition: width 2s;
	transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
	&:hover {
		color: #b8bbb7;
		background-color: #5e615c;
	}
`;
export const DecimalButton = styled.button`
	${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
	width: 75px;
	height: 75px;
	text-align: center;
	cursor: pointer;
	font-size: 2.75rem;
	font-weight: 800;
	border: 1px outset white;
	outline: none;
	color: #3a3a3a;
	background-color: rgba(194, 189, 189, 0.75);
	transition: width 2s;
	transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
	&:hover {
		color: #b8bbb7;
		background-color: #5e615c;
	}
`;