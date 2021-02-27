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
	const [current, setCurrent] = useState('');
	const [previous, setPrevious] = useState('');
	const [operation, setOperation] = useState('');
	const [text, setText] = useState('AC');
	// const only_decimal = /^[-+]?(\.\d{5,})?$/g;
	// const whole_integer = /^[-+]?\d+$/g;
	// const number_four_places = /^[\d]+?(\.\d{0,4})?$/g;
	const number_decimal_four_places = /^[- +]?[\d]+?(\.\d{0,4})?$/;

	//**************** handleNumbers Function ****************//
	const handleNumbers = el => {
		if (current === 'Undefined') {
			// setCurrent('0');
			console.log(current);
			setPrevious('');
			setOperation('');
		}

		const value = el.target.getAttribute('data');
		setText('CE');

		if (value === '.' && String(current).includes('.')) {
			return;
		}
		// console.log(value);
		if (current.length === 1 && current === '0') {
			value.replace(/^(0+)/g, '');
			setCurrent(value);
			setText('CE');
		} else if (current === 'Undefined') {
			value.replace('Undefined', '');
			setCurrent(value);
			setText('CE');
		} else {
			setCurrent(current + value);
		}
	};

	//**************** handleBackspace Function ****************//
	const handleBackspace = () => {
		console.log(current);
		if (current === 'Undefined') {
			handleClear();
		} else {
			setCurrent(String(current).slice(0, -1));
			// console.log(current.length);
		}
		if (
			(current.length === 2 && current.includes('-')) ||
			current.length === 1
		) {
			setCurrent('0');
		}
	};

	//**************** handleClear Function ****************//
	const handleClear = () => {
		if (text.includes('AC')) {
			setCurrent('0');
			setPrevious('');
			setOperation('');
		} else if (current === 'Undefined' || String(current).includes('NaN')) {
			setCurrent('0');
			setPrevious('');
			setOperation('');
			setText('AC');
		} else {
			setCurrent('0');
			setText('AC');
		}
	};

	//**************** handlePlusMinus Function ****************//
	const handlePlusMinus = () => {
		console.log(current);
		if (
			current === 'Undefined' ||
			previous === 'Undefined' ||
			current === ''
		) {
			handleClear();
		}
		let number = parseFloat(current);
		if (String(number).includes('NaN')) {
			handleClear();
		} else {
			
			console.log(number);
			if (number !== 0) {
				number *= -1;
				toString(number);
				setCurrent(number);
			}
		}

		// let number = parseFloat(current);
		// if (number !== 0) {
		// 	number *= -1;
		// 	number = number.toString();
		// 	setCurrent(number);
		//}
		// let number = parseFloat(current);

		// if (isNaN(number) || current === 'NaN') {

		// 	// console.log('this is location!');
		// 	setCurrent('0');
		// 	setPrevious('0');
		// } else {
		// 	setCurrent('Undefined');
		// }

		// if (number !== 0 && isNaN(number)) {
		// 	number *= -1;
		// 	number = number.toString();
		// 	setCurrent(number);
		// } else {
		// 	console.log('THIS IS WHERE1');
		// }
	};
	//**************** handleDecimal Function ****************//
	const handleDecimal = () => {};

	//**************** handleOperators Function ****************//
	const handleOperators = el => {
		if (current === '' || current === '.') {
			return;
		}
		if (previous !== '') {
			let value = calculate();

			if (!number_decimal_four_places.test(value)) {
				value = value.toFixed(4);
			}

			setPrevious(value);
		} else {
			setPrevious(current);
		}

		setCurrent('');
		setOperation(el.target.getAttribute('data'));
	};

	//**************** calculate Function ****************//
	const calculate = () => {
		let result;
		let previousNumber = parseFloat(previous);
		let currentNumber = parseFloat(current);

		if (isNaN(previousNumber) || isNaN(currentNumber)) {
			return;
		}

		switch (operation) {
			case '+':
				result = previousNumber + currentNumber;
				break;
			case '-':
				result = previousNumber - currentNumber;
				break;
			case '*':
				result = previousNumber * currentNumber;
				break;
			case '÷':
				result = previousNumber / currentNumber;
				break;
			default:
				return;
		}

		return result;
	};

	//**************** handleEqualOperation Function ****************//
	const handleEqualOperation = () => {
		let value = calculate();
		if (value === undefined || value === null) {
			return;
			// setCurrent('Undefined');
			// setPrevious('');
			// setOperation('');
			// setText('AC');
		}
		if (value === Infinity || isNaN(value)) {
			setCurrent('Undefined');
			setPrevious('Undefined');
			// setText('AC');
			setOperation('');
			return;
		}
		if (!number_decimal_four_places.test(value)) {
			value = value.toFixed(4);
			setCurrent(value);
			setPrevious('');
			setOperation('');
		} else {
			// value = value.toFixed(2);
			setCurrent(value);
			setPrevious('');
			setOperation('');
		}
	};

	return (
		<div className='calculator'>
			<Container>
				<Screen>
					<PrevScreen>
						{previous}
						{operation}
					</PrevScreen>
					<CurrScreen>&nbsp;{current}</CurrScreen>
				</Screen>
				<ButtonContainer>
					<OperatorButton
						gridArea={'add'}
						data={'+'}
						onClick={handleOperators}
					>
						&#43;
					</OperatorButton>
					<OperatorButton
						gridArea={'sub'}
						data={'-'}
						onClick={handleOperators}
					>
						&#8722;
					</OperatorButton>
					<OperatorButton
						gridArea={'mul'}
						data={'*'}
						onClick={handleOperators}
					>
						&#215;
					</OperatorButton>
					<OperatorButton
						gridArea={'div'}
						data={'÷'}
						onClick={handleOperators}
					>
						&#247;
					</OperatorButton>
					<NumberButton
						gridArea={'sev'}
						data={'7'}
						onClick={handleNumbers}
					>
						7
					</NumberButton>
					<NumberButton
						gridArea={'eig'}
						data={'8'}
						onClick={handleNumbers}
					>
						8
					</NumberButton>
					<NumberButton
						gridArea={'nin'}
						data={'9'}
						onClick={handleNumbers}
					>
						9
					</NumberButton>
					<ClearButton gridArea={'acc'} onClick={handleClear}>
						{text}
					</ClearButton>
					<NumberButton
						gridArea={'fou'}
						data={'4'}
						onClick={handleNumbers}
					>
						4
					</NumberButton>
					<NumberButton
						gridArea={'fiv'}
						data={'5'}
						onClick={handleNumbers}
					>
						5
					</NumberButton>
					<NumberButton
						gridArea={'six'}
						data={'6'}
						onClick={handleNumbers}
					>
						6
					</NumberButton>
					<BackButton gridArea={'bcc'} onClick={handleBackspace}>
						&#171;
					</BackButton>
					<NumberButton
						gridArea={'one'}
						data={'1'}
						onClick={handleNumbers}
					>
						1
					</NumberButton>
					<NumberButton
						gridArea={'two'}
						data={'2'}
						onClick={handleNumbers}
					>
						2
					</NumberButton>
					<NumberButton
						gridArea={'thr'}
						data={'3'}
						onClick={handleNumbers}
					>
						3
					</NumberButton>
					<EqualButton gridArea={'equ'} onClick={handleEqualOperation}>
						&#61;
					</EqualButton>
					<PMinusButton gridArea={'pmm'} onClick={handlePlusMinus}>
						{' '}
						&#177;
					</PMinusButton>
					<NumberButton
						gridArea={'zeo'}
						data={'0'}
						onClick={handleNumbers}
					>
						0
					</NumberButton>
					<DecimalButton
						gridArea={'dec'}
						data={'.'}
						onClick={handleNumbers}
					>
						&sdot;
					</DecimalButton>
				</ButtonContainer>
			</Container>
		</div>
	);
}
