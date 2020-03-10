import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			Welcome
			<Link to="/lyrics-search">lyrics</Link>
			<Link to="/calculator">calculator</Link>
		</div>
	);
};

export default Home;
