import React from 'react';
import Header from './Header/Header';
import AppList from './AppList/AppList';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const Home = () => {
	return (
		<Auxiliary>
			<Header />
			<AppList />
		</Auxiliary>
	);
};

export default Home;
