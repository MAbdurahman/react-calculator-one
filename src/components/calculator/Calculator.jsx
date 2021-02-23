import React from 'react';
// import { Container, Screen } from '../../styles';
import './Calculator.css';
import Screen from '../screen/Screen';
import Container from '../../container/Container';

export default function Calculator() {
	return (
		<div className='calculator'>
			<Screen></Screen>
			<Container></Container>
		</div>
	);
}
