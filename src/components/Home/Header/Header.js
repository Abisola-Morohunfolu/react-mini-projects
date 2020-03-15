import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.Header}>
			<h1>Web based Projects with React</h1>
			<p>A collection of small web apps made with React</p>
		</header>
	);
};

export default Header;
