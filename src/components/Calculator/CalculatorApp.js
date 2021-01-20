import React, { useState, useEffect } from 'react';
import CalculatorButton from './CalculatorButton';
import classes from './Calculator.module.css';

const calcBtns = [
	{ type: 'number', value: 7 },
	{ type: 'number', value: 8 },
	{ type: 'number', value: 9 },
	{ type: 'number', value: 6 },
	{ type: 'number', value: 5 },
	{ type: 'number', value: 4 },
	{ type: 'number', value: 3 },
	{ type: 'number', value: 2 },
	{ type: 'number', value: 1 },
	{ type: 'number', value: 0 },
	{ type: 'number', value: '.' },
	{ type: 'operator', value: '/' },
	{ type: 'operator', value: '+' },
	{ type: 'operator', value: '*' },
	{ type: 'operator', value: '-' },
	{ type: 'eval', value: '=' }
];

const CalculatorApp = () => {
	const [inputData, setInputData] = useState('');

	const inputHandler = event => {
		setInputData(inputData + event.target.value);
	};

	const keyPressHandler = event => {
		if (event.keyCode >= 48 && event.keyCode <= 57) {
			setInputData(inputData + event.key);
		} else if (event.keyCode === 13 || event.which === 13) {
			calculationHandler();
		}
	};

	const calculationHandler = () => {
		if (inputData === '') return;
		setInputData(
			String(eval(inputData)).length > 3 && String(eval(inputData)).includes('.')
				? String(eval(inputData)).toFixed(4)
				: String(eval(inputData))
		);
	};

	const clearInputHandler = () => {
		setInputData('');
	};

	const deleteInputHandler = () => {
		setInputData(inputData.substr(0, inputData.length - 1));
	};

	useEffect(() => {
		document.addEventListener('keypress', keyPressHandler);

		return () => {
			document.removeEventListener('keypress', keyPressHandler);
		};
	});

	return (
		<div className={classes.Wrapper}>
			<div className={classes.Result}>{inputData}</div>
			<div className={classes.ClearBtn}>
				<button className={classes.Clear} onClick={clearInputHandler}>
					Clear
				</button>
				<button className={classes.Delete} onClick={deleteInputHandler}>
					Delete
				</button>
			</div>
			<div className={classes.Buttons}>
				{calcBtns.map(btn => (
					<CalculatorButton
						type={btn.type}
						value={btn.value}
						addInput={inputHandler}
						evalInput={calculationHandler}
						key={btn.type + btn.value}
					/>
				))}
			</div>
		</div>
	);
};

export default CalculatorApp;
