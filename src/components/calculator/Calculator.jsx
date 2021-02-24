import React from 'react';
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
	DecimalButton
} from '../../styles/styled-components/Styled';

export default function Calculator() {
	return (
		<div className='calculator'>
			<Container>
				<Screen>
					<PrevScreen>10+</PrevScreen>
					<CurrScreen>10</CurrScreen>
				</Screen>
				<ButtonContainer>
					<OperatorButton>&#43;</OperatorButton>
					<OperatorButton>&#8722;</OperatorButton>
					<OperatorButton>&#215;</OperatorButton>
					<OperatorButton>&#247;</OperatorButton>
					<NumberButton>7</NumberButton>
					<NumberButton>8</NumberButton>
					<NumberButton>9</NumberButton>
					<ClearButton>AC</ClearButton>
					<NumberButton>4</NumberButton>
					<NumberButton>5</NumberButton>
					<NumberButton>6</NumberButton>
					<BackButton>&#171;</BackButton>
					<NumberButton>1</NumberButton>
					<NumberButton>2</NumberButton>
					<NumberButton>3</NumberButton>
					<EqualButton>&#61;</EqualButton>
					<PMinusButton> &#177;</PMinusButton>
					<NumberButton>0</NumberButton>
					<DecimalButton>&sdot;</DecimalButton>
				</ButtonContainer>
			</Container>
		</div>
	);
};
