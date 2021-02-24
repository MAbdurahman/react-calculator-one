import React, { useState } from 'react';
import './Calculator.css';
import {
	Container,
	Screen,
	PrevScreen,
	CurrScreen,
	ButtonContainer,
	OperatorButton,
	NumberButton,
	ClearButton,
	BackButton,
	EqualButton,
	PMinusButton,
	DecimalButton,
} from '../../styles/styled-components/Styled';

export default function Calculator() {
	const [current, setCurrent] = useState('');
	const [previous, setPrevious] = useState('');
	const [operation, setOperation] = useState('');

	const appendValue = el => {
		const value = el.target.getAttribute('data');

		if (value === '.' && current.includes('.')) {
			return;
		}
		console.log(value);
		setCurrent(current + value);
	};
	return (
		<div className='calculator'>
			<Container>
				<Screen>
					<PrevScreen>10+</PrevScreen>
					<CurrScreen>{current}</CurrScreen>
				</Screen>
				<ButtonContainer>
					<OperatorButton>&#43;</OperatorButton>
					<OperatorButton>&#8722;</OperatorButton>
					<OperatorButton>&#215;</OperatorButton>
					<OperatorButton>&#247;</OperatorButton>
					<NumberButton data={'7'} onClick={appendValue}>
						7
					</NumberButton>
					<NumberButton data={'8'} onClick={appendValue}>
						8
					</NumberButton>
					<NumberButton data={'9'} onClick={appendValue}>
						9
					</NumberButton>
					<ClearButton>AC</ClearButton>
					<NumberButton data={'4'} onClick={appendValue}>
						4
					</NumberButton>
					<NumberButton data={'5'} onClick={appendValue}>
						5
					</NumberButton>
					<NumberButton data={'6'} onClick={appendValue}>
						6
					</NumberButton>
					<BackButton>&#171;</BackButton>
					<NumberButton data={'1'} onClick={appendValue}>
						1
					</NumberButton>
					<NumberButton data={'2'} onClick={appendValue}>
						2
					</NumberButton>
					<NumberButton data={'3'} onClick={appendValue}>
						3
					</NumberButton>
					<EqualButton>&#61;</EqualButton>
					<PMinusButton> &#177;</PMinusButton>
					<NumberButton data={'0'} onClick={appendValue}>
						0
					</NumberButton>
					<DecimalButton data={'.'} onClick={appendValue}>
						&sdot;
					</DecimalButton>
				</ButtonContainer>
			</Container>
		</div>
	);
}
