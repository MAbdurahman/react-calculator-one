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
	//**************** State Values ****************//
	const [current, setCurrent] = useState('0');
	const [previous, setPrevious] = useState('');
	const [operation, setOperation] = useState('');
	const [text, setText] = useState('AC');

	//**************** appendValue Function ****************//
	const appendValue = el => {
		const value = el.target.getAttribute('data');

		if (value === '.' && current.includes('.')) {
			return;
		}
		// console.log(value);
		if (current.length === 1 && current.includes('0')) {
			value.replace(/^(0+)/g, '');
			setCurrent(value);
			setText('CL');
		} else {
			setCurrent(current + value);
		}
	};

	//**************** handleBackspace Function ****************//
	const handleBackspace = () => {
		if (current.includes('Undefined')) {
			setCurrent('0');
		} else {
			setCurrent(String(current).slice(0, -1));
			console.log(current.length);
		}
		if ((current.length === 2 && current.includes('-')) || 
			(current.length === 1)) {
			setCurrent('0');
		}
	};

	//**************** handleClear Function ****************//
	const handleClear = () => {
		if (text.includes('AC')) {
			setCurrent('0');
			setPrevious('');
			setOperation('');
		} else {
			setCurrent('0');
			setText('AC');
		}
	};

	//**************** handlePlusMinus Function ****************//
	const handlePlusMinus = () => {
		let number = parseFloat(current);
		
		if (number !== 0) {
			number *= -1;
			number = number.toString();
			setCurrent(number);
		}
	};

	return (
		<div className='calculator'>
			<Container>
				<Screen>
					<PrevScreen>
						{previous}' '{operation}
					</PrevScreen>
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
					<ClearButton gridArea={'acc'} onClick={handleClear}>
						{text}
					</ClearButton>
					<NumberButton gridArea={'fou'} data={'4'} onClick={appendValue}>
						4
					</NumberButton>
					<NumberButton gridArea={'fiv'} data={'5'} onClick={appendValue}>
						5
					</NumberButton>
					<NumberButton gridArea={'six'} data={'6'} onClick={appendValue}>
						6
					</NumberButton>
					<BackButton gridArea={'bcc'} onClick={handleBackspace}>
						&#171;
					</BackButton>
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
					<PMinusButton gridArea={'pmm'} onClick={handlePlusMinus}> &#177;</PMinusButton>
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
