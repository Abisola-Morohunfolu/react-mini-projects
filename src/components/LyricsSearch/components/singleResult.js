import React from 'react';
import SearchResult from '../styles/SingleResult.module.css';

const singleResult = () => {
	return (
		<div className={SearchResult.Result}>
			<h3 className="search__result-heading">Wizkid</h3>
			<p className="search__result-paragraph">Joro</p>
		</div>
	);
};

export default singleResult;
