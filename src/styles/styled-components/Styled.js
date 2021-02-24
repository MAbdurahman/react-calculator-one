import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 400px;
	height: 620px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: repeat(4, 100px);
	grid-template-rows: minmax(120px auto) repeat(5, 100px);
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
	font-size: 1.5rem;
`;

export const CurrScreen = styled.div`
	color: rgb(255, 255, 255);
	font-size: 2.5rem;
`;

export const ButtonContainer = styled.div`
	height: 400px;
	margin-top: 1.3em;
	display: grid;
	grid-template-areas:
		'add sub mul div'
		'sev eig nin acc'
		'fou fiv six bcc'
		'one two thr equ'
		'pmm zeo dec equ';
`;

export const OperatorButton = styled.button`
	width: 100px;
	height: 100px;
	text-align: center;
	cursor: pointer;
	font-size: 2rem;
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
	width: 100px;
	height: 100px;
	text-align: center;
	cursor: pointer;
	font-size: 2rem;
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
	grid-area: acc;
	width: 100px;
	height: 100px;
	text-align: center;
	cursor: pointer;
	font-size: 2rem;
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
	grid-area: bcc;
	width: 100px;
	height: 100px;
	text-align: center;
	cursor: pointer;
	font-size: 3rem;

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
	grid-area: equ;
	width: 100px;
	height: 200px;
	font-size: 3rem;
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
	grid-area: pmm;
	width: 100px;
	height: 100px;
	text-align: center;
	cursor: pointer;
	font-size: 2rem;
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
	grid-area: dec;
	width: 100px;
	height: 100px;
	text-align: center;
	cursor: pointer;
	font-size: 3rem;
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