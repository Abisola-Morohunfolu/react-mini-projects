import React from 'react';
import SingleResult from './singleResult';

import classes from '../styles/SearchResults.module.css';

const searchResults = () => {
	return (
		<section className={classes.Container}>
			<SingleResult />
			<SingleResult />
		</section>
	);
};

export default searchResults;
