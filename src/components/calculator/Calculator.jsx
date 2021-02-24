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
	const [current, setCurrent] = useState('0');
	const [previous, setPrevious] = useState('');
	const [operation, setOperation] = useState('');

	const appendValue = el => {
		const value = el.target.getAttribute('data');

		if (value === '.' && current.includes('.')) {
			return;
		}
		console.log(value);
		if (current.length === 1 && current.includes('0')) {
			value.replace(/^(0+)/g, '');
			setCurrent(value);

		} else {

			setCurrent(current + value);
		}
	};
	return (
		<div className='calculator'>
			<Container>
				<Screen>
					<PrevScreen>10+</PrevScreen>
					<CurrScreen>{current}</CurrScreen>
				</Screen>
				<ButtonContainer>
					<OperatorButton gridArea={'add'}>&#43;</OperatorButton>
					<OperatorButton gridArea={'sub'}>&#8722;</OperatorButton>
					<OperatorButton gridArea={'mul'}>&#215;</OperatorButton>
					<OperatorButton gridArea={'div'}>&#247;</OperatorButton>
					<NumberButton gridArea={'sev'} data={'7'} onClick={appendValue}>
						7
					</NumberButton>
					<NumberButton gridArea={'eig'} data={'8'} onClick={appendValue}>
						8
					</NumberButton>
					<NumberButton gridArea={'nin'} data={'9'} onClick={appendValue}>
						9
					</NumberButton>
					<ClearButton gridArea={'acc'}>AC</ClearButton>
					<NumberButton gridArea={'fou'} data={'4'} onClick={appendValue}>
						4
					</NumberButton>
					<NumberButton gridArea={'fiv'} data={'5'} onClick={appendValue}>
						5
					</NumberButton>
					<NumberButton gridArea={'six'} data={'6'} onClick={appendValue}>
						6
					</NumberButton>
					<BackButton gridArea={'bcc'}>&#171;</BackButton>
					<NumberButton gridArea={'one'} data={'1'} onClick={appendValue}>
						1
					</NumberButton>
					<NumberButton gridArea={'two'} data={'2'} onClick={appendValue}>
						2
					</NumberButton>
					<NumberButton gridArea={'thr'} data={'3'} onClick={appendValue}>
						3
					</NumberButton>
					<EqualButton gridArea={'equ'}>&#61;</EqualButton>
					<PMinusButton gridArea={'pmm'}> &#177;</PMinusButton>
					<NumberButton gridArea={'zeo'} data={'0'} onClick={appendValue}>
						0
					</NumberButton>
					<DecimalButton gridArea={'dec'} data={'.'} onClick={appendValue}>
						&sdot;
					</DecimalButton>
				</ButtonContainer>
			</Container>
		</div>
	);
}
