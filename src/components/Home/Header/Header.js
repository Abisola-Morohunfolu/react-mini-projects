import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.Header}>
			<div className={classes.HeaderText}>
				<h1 className={classes.TextHeading}>
					<span>React</span> Projects
				</h1>
				<p>A collection of small web apps made with React</p>
			</div>
			<div className={classes.IconsContainer}></div>
		</header>
	);
};

export default Header;
