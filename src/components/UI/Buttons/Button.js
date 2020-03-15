import React from 'react';
import classes from './Buttons.module.css';

const Button = props => {
	let attachedClass = [classes.Button];
	if (props.type === 'demo') {
		attachedClass.push(classes.Demo);
	}
	return <button className={attachedClass.join(' ')}>{props.children}</button>;
};

export default Button;
