import React from 'react';
import classes from './CalculatorButton.module.css';

const calculatorButton = props => {
	const { type, value, addInput, evalInput } = props;
	let btnClass = null;

	//classes for number input
	if (type === 'number' && value === '.') {
		btnClass = 'Number_dot';
	} else if (type === 'number') {
		btnClass = 'Number_' + value;
	}

	let inputBtn = null;
	switch (type) {
		case 'operator':
			inputBtn = (
				<button type="button" className={classes.Operator} value={value} onClick={addInput}>
					{value}
				</button>
			);
			break;
		case 'number':
			inputBtn = (
				<button type="button" className={classes[btnClass]} value={value} onClick={addInput}>
					{value}
				</button>
			);
			break;
		case 'eval':
			inputBtn = (
				<button className={classes.Eval} value={value} onClick={evalInput}>
					{value}
				</button>
			);
			break;
		default:
			inputBtn = null;
	}
	return inputBtn;
};

export default calculatorButton;
